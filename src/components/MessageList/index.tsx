import { Box } from "@mui/material";
import { FC, useEffect, useRef } from "react";
import MessageComponent from "../Message";
import {
  SendMessageDocument,
  useGetMessagesQuery,
} from "../../presentation/graphql/generated/graphql";

interface MessageListArgs {
  chatId: string;
  userId: string;
}

const MessageListComponent: FC<MessageListArgs> = ({ chatId, userId }) => {
  const chatIdParams = chatId;

  const defaultData = {
    _id: "default",
    avatar: "https://robohash.org/default",
    email: "default@example.com",
    firstName: "Default",
    lastName: "User",
    password: "default",
  };

  const { data, subscribeToMore, refetch } = useGetMessagesQuery({
    variables: { chatId },
  });

  const messageContainerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [data?.getMessages]);

  return (
    <Box
      ref={messageContainerRef}
      display="flex"
      flexDirection="column"
      gap={2}
      overflow="auto"
      maxHeight="400px"
      sx={{
        padding: 2,
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      {data?.getMessages?.map((message) => (
        <>
          {
            <MessageComponent
              key={message._id}
              message={{ ...message, user: message.user ?? defaultData }}
              isOwnMessage={message.userId === userId}
            />
          }
        </>
      ))}
    </Box>
  );
};

export default MessageListComponent;
