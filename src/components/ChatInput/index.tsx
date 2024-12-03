import { ChangeEvent, FC, useState } from "react";
import { Box, IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface ChatInputComponentArgs {
  onClickSendMessage: (content: string) => void;
}

const ChatInputComponent: FC<ChatInputComponentArgs> = ({ onClickSendMessage }) => {
  const [message, setMessage] = useState("");

  const _handleSendMessage = () => {
    if (message.trim()) {
      onClickSendMessage(message);
      setMessage("");
    }
  };

  const onChangeMessage = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setMessage(value);
  };

  return (
    <Box display="flex" alignItems="center" gap={2} mt={2} border={"gray"}>
      <TextField
        variant="outlined"
        value={message}
        onChange={onChangeMessage}
        fullWidth
        size="small"
      />

      <IconButton
        color="primary"
        onClick={_handleSendMessage}
        disabled={!message.trim()}
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default ChatInputComponent;
