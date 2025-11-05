// actions/contact-actions.ts
'use server';

import { redirect } from 'next/navigation';

interface FormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
}

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate processing

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  const errors: FormState['errors'] = {};

  if (!name || name.trim().length < 2) {
    errors.name = ['Name must be at least 2 characters long'];
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = ['Please enter a valid email address'];
  }

  if (!message || message.trim().length < 10) {
    errors.message = ['Message must be at least 10 characters long'];
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please fix the errors below',
      errors
    };
  }

  // Here you would typically send the data to your email service or database
  console.log('Contact form submission:', { name, email, message });

  return {
    success: true,
    message: 'Thank you for your message! I\'ll get back to you soon.'
  };
}