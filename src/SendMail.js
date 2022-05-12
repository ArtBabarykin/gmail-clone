import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import "./SendMail.css";

function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };
  const dispatch = useDispatch();

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && (
          <span className="sendMail__error">This field is required</span>
        )}
        <input
          name="subject"
          placeholder="Subject"
          {...register("subject", { required: true })}
          type="text"
        />
        {errors.subject && (
          <span className="sendMail__error">This field is required</span>
        )}
        <textarea
          name="message"
          className="sendMail__message"
          {...register("message", { required: true })}
          type="text"
        />
        {errors.message && (
          <span className="sendMail__error">This field is required</span>
        )}
        <div className="sendMail__options">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="sendMail__send"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
