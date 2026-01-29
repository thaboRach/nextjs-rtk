'use server';

import { z } from 'zod';

export type SendMessageState = {
  success?: boolean;
  data?: {
    message: string;
  };
  errors?: {
    message?: string[];
  };
};

const SendMessageFormSchema = z.object({
  message: z.string().min(1, 'Message cannot be empty').max(250, 'Message is too long'),
});

export async function sendMessage(
  _prevState: SendMessageState,
  formData: FormData,
): Promise<SendMessageState> {
  const validatedFields = SendMessageFormSchema.safeParse({
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { message } = validatedFields.data;
  return {
    success: true,
    data: { message },
  };
}
