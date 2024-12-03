import { FC, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import MessageListComponent from "../MessageList/index";
import ChatInputComponent from "../ChatInput/index";
import {
  SendMessageDocument,
  useCreateMessageMutation,
  useGetMessagesQuery,
} from "../../presentation/graphql/generated/graphql";

interface ChatRoomProps {
  chatId: string;
  userId: string;
}

const ChatRoomComponent: FC<ChatRoomProps> = ({ chatId, userId }) => {
  const chatIdParams = chatId;

  const { data, subscribeToMore, refetch } = useGetMessagesQuery({
    variables: { chatId },
  });

  const [sendMessage] = useCreateMessageMutation();


  useEffect(() => {
    subscribeToMore({
      document: SendMessageDocument,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      updateQuery: (prev: any, { subscriptionData }: any) => {
        const { chatId } = subscriptionData.data.createMessage || {};

        if (String(chatId) === String(chatIdParams)) refetch();

        return prev;
      },
      variables: {
        chatId,
      },
    });
  }, []);

  const _handleSendMessage = async (message: string) => {
    await sendMessage({
          variables: {
            chatId,
            content: message,
            userId,
          },
          onCompleted: ({ createMessage }) => {
            console.log(createMessage);
          },
        });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "60vh",
        width: "600px",
        border: "1px solid lightgray",
        borderRadius: "15px",
        padding: "25px",
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "center", margin: "5px" }}>
        Chat Room
      </Typography>
      <MessageListComponent chatId={chatId} userId={userId} />
      <ChatInputComponent onClickSendMessage={_handleSendMessage} />
    </Box>
  );
};

export default ChatRoomComponent;
