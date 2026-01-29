'use client';

import { DateTime } from 'luxon';
import { useActionState, useEffect } from 'react';

import { sendMessage, SendMessageState } from '@/lib/actions';
import { addMessage } from '@/lib/features/chat/chatSlice';
import { useAppDispatch } from '@/lib/hooks';

import styles from './ChatForm.module.scss';

const initialState: SendMessageState = { data: { message: '' } };

function ChatForm() {
  const [state, formAction] = useActionState(sendMessage, initialState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (state.success && state.data) {
      dispatch(
        addMessage({
          text: state.data.message,
          isUser: true,
          timestamp: DateTime.now().toISO()!,
        }),
      );
    }
  }, [state, dispatch]);

  return (
    <form
      action={formAction}
      className={`${styles.container} ${state.errors?.message && state.errors?.message?.length > 0 ? styles.error : ''}`}
    >
      <input
        name="message"
        type="text"
        placeholder="Type your message..."
        autoComplete="off"
        maxLength={250}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default ChatForm;
