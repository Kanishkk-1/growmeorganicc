import { useRef, useState } from "react";
import { useHistory } from "react-router-use-history";


const Firstpage: React.FC = () => {
  const history = useHistory();

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleClick = () => {

    if (nameRef.current && phoneNumberRef.current && emailRef.current) {
      const name = nameRef.current.value;
      const phoneNumber = phoneNumberRef.current.value;
      const email = emailRef.current.value;

      if (name && phoneNumber && email) {
        
        localStorage.setItem(
          "userData",
          JSON.stringify({ name, phoneNumber, email })
        );

      
        history.push("/second-page");
      } else {
        setErrorMessage("Please enter all details before proceeding.");
      }
    }
  };


  return (
    <div>
      <form action="">
        <label>Name:</label>
        <input ref={nameRef} type="text" id="name" name="name" required />

        <br />

        <label>Phone Number:</label>
        <input
          ref={phoneNumberRef}
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          required
        />

        <br />

        <label>Email:</label>
        <input ref={emailRef} type="email" id="email" name="email" required />

        <br />
        
        <button onClick={handleClick} type="button">
          Submit
        </button>
      </form>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default Firstpage;
