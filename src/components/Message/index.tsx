import { Box, Typography, Avatar } from "@mui/material";
import { MessageProps } from "../../interfaces/types";

interface MessageComponentArgs {
  message: MessageProps;
  isOwnMessage: boolean;
}

const MessageComponent: React.FC<MessageComponentArgs> = ({
  message,
  isOwnMessage,
}) => {
  const { content, user, createdAt } = message;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isOwnMessage ? "row-reverse": "row",
        alignItems: "flex-start",
        marginBottom: 2,
        maxWidth: "60%",
        alignSelf: isOwnMessage ?  "flex-end" : "flex-start", 
      }}
    >
      <Avatar
        src={user?.avatar || "https://robohash.org/unknown"}
        alt={`${user?.firstName} ${user?.lastName}`}
        sx={{ margin: isOwnMessage ? "0 8px 0 0" : "0 0 0 8px" }}
      />
      <Box>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          sx={{
            textAlign: isOwnMessage ? "right" : "left", 
            marginBottom: "4px",
          }}
        >
          {user?.firstName} {user?.lastName}
        </Typography>
        <Box
          sx={{
            padding: "8px 16px",
            backgroundColor: isOwnMessage ? "#4462ff" : "common.white",
            color: isOwnMessage ? "common.white" : "text.primary",
            borderRadius: "8px",
            boxShadow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="body2" color="inherit" sx={{ margin: "4px 0" }}>
            {content}
          </Typography>
          <Typography variant="caption" color="inherit" sx={{ alignSelf: "flex-end" }}>
            {new Date(createdAt).toLocaleTimeString()}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MessageComponent;
