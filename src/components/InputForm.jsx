import { useState } from "react";
import styles from "./InputForm.module.css";

const INITIAL_INV = {
  "current-savings": 10000,
  "yearly-contribution": 1100,
  "expected-return": 7,
  duration: 10,
};

export default function InputForm(props) {
  const [userInput, setUserInput] = useState(INITIAL_INV);

  const inputChangeHandler = (input, value) => {
    setUserInput((prevState) => {
      return { ...prevState, [input]: +value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onHandleInput(userInput);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="text"
            id="current-savings"
            value={userInput["current-savings"]}
            onChange={(event) => {
              inputChangeHandler("current-savings", event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="text"
            id="yearly-contribution"
            value={userInput["yearly-contribution"]}
            onChange={(event) => {
              inputChangeHandler("yearly-contribution", event.target.value);
            }}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="text"
            id="expected-return"
            value={userInput["expected-return"]}
            onChange={(event) => {
              inputChangeHandler("expected-return", event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="text"
            id="duration"
            value={userInput["duration"]}
            onChange={(event) => {
              inputChangeHandler("duration", event.target.value);
            }}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button type="reset" className={styles.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}
