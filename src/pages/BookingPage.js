import { useEffect, useReducer } from "react";
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
  availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(
    (time) => time !== formData.time
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData) {
        resolve(true); // Simulate successful submission
      } else {
        reject(new Error("Form submission failed."));
      }
    }, 1000); // Simulate API delay
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
      dispatch({ type: "UPDATE_TIMES", times });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDataUser = (data) => {
    console.log(data);
  };

  return (
    <BookingForm
      onUserData={handleDataUser}
      updateAvailableTimes={handleSelectedDate}
      availableTimes={availableTimes}
    />
  );
}
