'use client';

import { DateTime } from 'luxon';
import { useEffect, useRef } from 'react';

import ChatForm from '@/components/chat-form/ChatForm';
import Message from '@/components/message/Message';
import { selectMessages } from '@/lib/features/chat/chatSlice';
import { useAppSelector } from '@/lib/hooks';

import styles from './ChatWindow.module.scss';

function ChatWindow() {
  const messages = useAppSelector(selectMessages);

  const sortedMessages = messages
    .slice()
    .sort(
      (a, b) => DateTime.fromISO(a.timestamp).toMillis() - DateTime.fromISO(b.timestamp).toMillis(),
    );

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sortedMessages.length]);

  return (
    <div className={styles.container}>
      <section className={styles.messages}>
        {sortedMessages.map((message, key) => (
          <Message
            key={key}
            text={message.text}
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))}
        <div ref={messagesEndRef} />
      </section>
      <ChatForm />
    </div>
  );
}

export default ChatWindow;
