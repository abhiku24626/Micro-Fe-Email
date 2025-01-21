import React, { useState } from "react";
const Cards = React.lazy(() => import('hostapp/Card'));

const Email = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!email || !subject || !message) {
      alert("Please fill out all fields!");
      return;
    }
    // Dispatch the custom event directly
    handleEmailSend({ email, subject, message });
  };

  const handleEmailSend = ({ email, subject, message }) => {
    alert(`Email sent to: ${email}\nSubject: ${subject}\nMessage: ${message}`);
    // Reset form values after sending
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const sendMessage = () => {
    alert(`Message sent: ${input}`);
    setInput(""); // Clear input after sending
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Cards
        email={email}
        subject={subject}
        message={message}
        input={input}
        setEmail={setEmail}
        setSubject={setSubject}
        setMessage={setMessage}
        setInput={setInput}
        handleSend={handleSend}
        sendMessage={sendMessage}
      />
    </React.Suspense>
  );
};

export default Email;
