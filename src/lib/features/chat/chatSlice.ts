import { DateTime } from 'luxon';

import { createAppSlice } from '@/lib/createAppSlice';
import { Message } from '@/types/message';

export interface ChatSliceState {
  messages: Message[];
}

const initialState: ChatSliceState = {
  messages: [
    {
      text: 'Hello! How can I assist you today?',
      isUser: false,
      timestamp: DateTime.local(2026, 1, 27, 8, 30).toISO()!,
    },
    {
      text: 'I have a question about my order.',
      isUser: true,
      timestamp: DateTime.local(2026, 1, 27, 8, 31).toISO()!,
    },
    {
      text: 'Sure, please provide your order number.',
      isUser: false,
      timestamp: DateTime.local(2026, 1, 27, 8, 35).toISO()!,
    },
  ],
};

export const chatSlice = createAppSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action: { payload: Message }) => {
      state.messages.push(action.payload);
    },
  },
  selectors: {
    selectMessages: (state: ChatSliceState) => state.messages,
  },
});

export const { addMessage } = chatSlice.actions;
export const { selectMessages } = chatSlice.selectors;
