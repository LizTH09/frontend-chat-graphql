import { Box, CircularProgress, Typography } from "@mui/material";
import { FC } from "react";
import MessageComponent from "../Message";
import { useGetMessagesQuery } from "../../presentation/graphql/generated/graphql";

interface MessageListArgs {
  chatId: string;
  userId: string;
}

const MessageListComponent: FC<MessageListArgs> = ({ chatId, userId }) => {

  const defaultData = { 
    _id: "default",
    avatar: "https://robohash.org/default", 
    email: "default@example.com",
    firstName: "Default",
    lastName: "User",
    password: "default", 
  }

  const { data, loading, error } = useGetMessagesQuery({
    variables: {
      chatId,
    },
  });

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">Error: {error.message}</Typography>;


  return (
    <Box
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
