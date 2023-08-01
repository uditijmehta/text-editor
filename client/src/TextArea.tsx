import React from 'react';

interface TextAreaProps {
  text: string;
  onTextChange: (text: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ text, onTextChange }) => {
  return (
    <textarea
      value={text}
      onChange={(event) => onTextChange(event.target.value)}
    />
  );
};

export default TextArea;
