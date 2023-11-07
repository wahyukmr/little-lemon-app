import { useEffect, useState } from "react";

// const today = new Date();
// const todayString = today.toISOString().slice(0, 10);

export default function BookingForm({ onUserData, updateAvailableTimes, availableTimes }) {
  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [number, setNumber] = useState("");
  const [selectedOccasion, setSelectedOccasion] = useState("birthday");

  const submitHandler = (e) => {
    e.preventDefault();

    const dataUser = {
      date,
      number,
      selectedTime,
      selectedOccasion,
    };
    onUserData(dataUser);

    setDate("");
    setSelectedTime("");
    setNumber("");
    setSelectedOccasion("");
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    updateAvailableTimes(e.target.value);
  };

  useEffect(() => {
    console.log(availableTimes);
    console.log("time:" + selectedTime);
    console.log("date:" + date);
  });

  return (
    <form method="POST" onSubmit={submitHandler}>
      <label htmlFor="res-date">Choose date</label>
      <input
        id="res-date"
        type="date"
        name="date"
        value={date}
        onChange={handleDateChange}
        required={true}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="selectedTime"
        required={true}
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
      >
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        placeholder="1"
        min={1}
        max={10}
        name="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        required={true}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="selectedOccasion"
        required={true}
        value={selectedOccasion}
        onChange={(e) => setSelectedOccasion(e.target.value)}
      >
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make your reservation" />
    </form>
  );
}
