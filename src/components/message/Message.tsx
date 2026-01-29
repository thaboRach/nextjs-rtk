import { DateTime } from 'luxon';

import styles from './Message.module.scss';

import type { Message } from '@/types/message';

type MessageProps = Omit<Message, 'id'>;

function Message({ text, isUser, timestamp }: MessageProps) {
  const formattedTime = DateTime.fromISO(timestamp).toFormat('hh:mm a');

  return (
    <div className={`${styles.container} ${isUser ? styles.right : styles.left}`}>
      <p>{text}</p>
      <small className={styles.timestamp}>{formattedTime}</small>
    </div>
  );
}

export default Message;
