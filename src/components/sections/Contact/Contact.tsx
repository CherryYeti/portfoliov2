import "./Contact.css";
import Title from "../../Title/Title";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

type FormState = {
  email: string;
  name: string;
  message: string;
};
type ServiceMessage = {
  success: boolean;
  text: string;
};

function Contact() {
  const formID = "xumvb4iF";
  const formSparkUrl = `https://submit-form.com/${formID}`;
  const recaptchaKey = "6Ld317AlAAAAADSG1mJZFdthR_Tdf-0_T5P4VbV8";
  const recaptchaRef = useRef<any>();
  const initialFormState = {
    email: "",
    name: "",
    message: "",
  };
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<ServiceMessage>();
  const [recaptchaToken, setRecaptchaToken] = useState<string>()
  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  };
  const postSubmission = async () => {
    const payload = {
      ...formState,
      "g-recaptcha-response": recaptchaToken
    };
    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
      setMessage({
        success: true,
        text: "Thank you for contacting!",
      });
      setFormState(initialFormState);
      recaptchaRef.current.reset();
    } catch (error) {
      console.log(error);
      setMessage({
        success: false,
        text: "There was a problem submitting the form! Please make sure you check the Captcha before clicking submit.",
      });
    }
  };
  const updateFormControl = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    const formKey = id as keyof FormState;
    const updatedFormState = { ...formState };
    updatedFormState[formKey] = value;
    setFormState(updatedFormState);
  };
  const updateRecaptchaToken = (token:string | null) =>{
    setRecaptchaToken(token as string)
  }
  return (
    <>
      <Title text="Contact Me" />
      {message && (
        <div className={`${message.success ? "success" : "fail"}`}>
          {message.text}
        </div>
      )}
      <div className="contact" id="contact">
        <form onSubmit={submitForm}>
          <label htmlFor="name">Name</label>
          <input
            onChange={updateFormControl}
            type="text"
            id="name"
            value={formState.name}
            placeholder="Please enter your name here..."
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={updateFormControl}
            type="text"
            id="email"
            value={formState.email}
            placeholder="Please enter your email here..."
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            onChange={updateFormControl}
            value={formState.message}
            placeholder="What do you want to talk about?"
          />
          <ReCAPTCHA ref={recaptchaRef} sitekey={recaptchaKey} onChange={updateRecaptchaToken} />
          <button disabled={submitting} className="submitButton">
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}
export default Contact;
