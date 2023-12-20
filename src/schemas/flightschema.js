import { object, string, number, date, InferType } from "yup";

export const FlightSchema = object({
  passengername: string().required("Please Enter passenger Name"),
  flightNumber: number().required("Please Enter the flight Number"),
  airlines: string().required("Enter airlines name"),
  departureCity: string().required("departure city name required"),
  destinationCity: string().required("destination city is required"),
  seatNumber: string().required("Enter seat number"),
});
