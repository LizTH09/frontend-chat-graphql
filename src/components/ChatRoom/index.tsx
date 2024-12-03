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
        width: "550px",
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          marginBottom: "10px",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            margin: "5px",
            marginBottom: "15px",
            fontWeight: "600",
            color: "#1976d2",
          }}
        >
          Chat Room
        </Typography>
      </Box>
      <MessageListComponent chatId={chatId} userId={userId} />
      <ChatInputComponent onClickSendMessage={_handleSendMessage} />
    </Box>
  );
};

export default ChatRoomComponent;
