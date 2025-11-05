// Contact.tsx
'use client';

import { useActionState, useEffect, useRef, useState } from 'react';
import { submitContactForm } from '@/actions/contact-actions';
import styles from '@/styles/Contact.module.css';

interface FormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
}

const initialState: FormState = {
  success: false,
  message: '',
  errors: {}
};

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const [focusedFields, setFocusedFields] = useState({
    name: false,
    email: false,
    message: false
  });

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      setFocusedFields({ name: false, email: false, message: false });
    }
  }, [state.success]);

  const handleFocus = (field: keyof typeof focusedFields) => {
    setFocusedFields(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: keyof typeof focusedFields, value: string) => {
    if (!value) {
      setFocusedFields(prev => ({ ...prev, [field]: false }));
    }
  };

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <h2>Get In Touch</h2>
        <p className={styles.subtitle}>
          Ready to bring your ideas to life? Let&apos;s create something amazing together.
        </p>

        <form ref={formRef} action={formAction} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.formInput}
                onFocus={() => handleFocus('name')}
                onBlur={(e) => handleBlur('name', e.target.value)}
                aria-describedby={state.errors?.name ? 'name-error' : undefined}
              />
              <label 
                htmlFor="name"
                className={`${styles.formLabel} ${
                  focusedFields.name ? styles.focused : ''
                }`}
              >
                Your Name
              </label>
            </div>
            {state.errors?.name && (
              <div id="name-error" className={styles.errorMessage}>
                {state.errors.name.join(', ')}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.formInput}
                onFocus={() => handleFocus('email')}
                onBlur={(e) => handleBlur('email', e.target.value)}
                aria-describedby={state.errors?.email ? 'email-error' : undefined}
              />
              <label 
                htmlFor="email"
                className={`${styles.formLabel} ${
                  focusedFields.email ? styles.focused : ''
                }`}
              >
                Email Address
              </label>
            </div>
            {state.errors?.email && (
              <div id="email-error" className={styles.errorMessage}>
                {state.errors.email.join(', ')}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`${styles.formInput} ${styles.textarea}`}
                onFocus={() => handleFocus('message')}
                onBlur={(e) => handleBlur('message', e.target.value)}
                aria-describedby={state.errors?.message ? 'message-error' : undefined}
              />
              <label 
                htmlFor="message"
                className={`${styles.formLabel} ${
                  focusedFields.message ? styles.focused : ''
                }`}
              >
                Your Message
              </label>
            </div>
            {state.errors?.message && (
              <div id="message-error" className={styles.errorMessage}>
                {state.errors.message.join(', ')}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className={styles.submitButton}
          >
            {isPending ? (
              <>
                <span className={styles.spinner}></span>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <span className={styles.buttonSpark}></span>
              </>
            )}
          </button>

          {state.message && (
            <div className={`${styles.message} ${state.success ? styles.success : styles.error}`}>
              {state.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}