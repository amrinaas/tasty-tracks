'use client';

import { useFormState } from 'react-dom';

import ImagePicker from '@/app/components/meals/image-picker';
import classes from './page.module.css';

import { shareMeal } from '@/lib/action';
import MealsButtonSubmit from '@/app/components/meals/meals-button-submit';

export default function ShareMealPage() {
  // useFormStatus is for managing the whole form in this component that will be submitted with help of server actions
  // state is current state
  // formAction is value for form
  const [state, formAction] = useFormState(shareMeal, { message: null }); // need 2 arguments. second argument is init state

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing</p>
      </header>

      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your meal" name="image" />
          {/* output for error message */}
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <MealsButtonSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
