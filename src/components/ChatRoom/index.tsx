import { FC } from "react";
import { Box, Typography } from "@mui/material";
import MessageListComponent from "../MessageList/index";
import ChatInputComponent from "../ChatInput/index";
import { useCreateMessageMutation } from "../../presentation/graphql/generated/graphql";

interface ChatRoomProps {
  chatId: string;
  userId: string;
}

const ChatRoomComponent: FC<ChatRoomProps> = ({ chatId, userId }) => {
  const [sendMessage] = useCreateMessageMutation();

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
