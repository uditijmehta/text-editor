import React from 'react';
import { TextField } from '@material-ui/core';

interface TextAreaProps {
  text: string;
  onTextChange: (text: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ text, onTextChange }) => {
  return (
    <TextField
      value={text}
      onChange={(event) => onTextChange(event.target.value)}
      variant="outlined"
      multiline
      fullWidth
      minRows={20}
      margin="normal"
    />
  );
};

export default TextArea;
