import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";

const availableTimesByDate = {
  "2023-11-01": ["10:00", "11:00", "12:00"],
  "2023-11-02": ["14:00", "15:00", "16:00"],
  "2023-11-03": ["10:00", "11:00", "12:00"],
  "2023-11-04": ["14:00", "15:00", "16:00"],
  "2023-11-05": ["10:00", "11:00", "12:00"],
  "2023-11-06": ["14:00", "15:00", "16:00"],
  "2023-11-07": ["10:00", "11:00", "12:00"],
  "2023-11-08": ["14:00", "15:00", "16:00"],
  "2023-11-09": ["10:00", "11:00", "12:00"],
  "2023-11-10": ["14:00", "15:00", "16:00"],
  "2023-11-11": ["10:00", "11:00", "12:00"],
  "2023-11-12": ["14:00", "15:00", "16:00"],
  "2023-11-13": ["10:00", "11:00", "12:00"],
  "2023-11-14": ["14:00", "15:00", "16:00"],
  "2023-11-15": ["10:00", "11:00", "12:00"],
  "2023-11-16": ["14:00", "15:00", "16:00"],
  "2023-11-17": ["10:00", "11:00", "12:00"],
  "2023-11-18": ["14:00", "15:00", "16:00"],
  "2023-11-19": ["10:00", "11:00", "12:00"],
  "2023-11-20": ["14:00", "15:00", "16:00"],
};

const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (availableTimesByDate[date]) {
        resolve(availableTimesByDate[date]);
      } else {
        reject(new Error("No available times for the selected date."));
      }
    }, 1000);
  });
};

const submitAPI = (formData) => {
  console.log(formData.selectedTime);
  availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(
    (time) => time !== formData.selectedTime
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData) {
        resolve(availableTimesByDate[formData.date]);
      } else {
        reject(new Error("Form submission failed."));
      }
    }, 1000);
  });
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.times;
    default:
      return state;
  }
};

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(reducer, []);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTimes = async (date) => {
      try {
        const times = await fetchAPI(date);
        dispatch({ type: "UPDATE_TIMES", times });
      } catch (error) {
        console.error(error);
      }
    };

    const today = new Date().toISOString().slice(0, 10);
    fetchTimes(today);
  }, []);

  const handleSelectedDate = async (date) => {
    try {
      const times = await fetchAPI(date);
      console.log(times);
      dispatch({ type: "UPDATE_TIMES", times });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDataUser = async (dataUser) => {
    try {
      const times = await submitAPI(dataUser);
      console.log("data:" + times);
      dispatch({ type: "UPDATE_TIMES", times });
      if (times) {
        navigate("success");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BookingForm
      onUserData={handleDataUser}
      updateAvailableTimes={handleSelectedDate}
      availableTimes={availableTimes}
    />
  );
}
