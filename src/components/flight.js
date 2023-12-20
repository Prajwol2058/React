import { React, useState } from "react";
import { Formik, useFormik } from "formik";
import { FlightSchema, flightSchema } from "../schemas/flightschema";

const Flights = () => {
  const formik = useFormik({
    initialValues: {
      passengername: "",
      flightNumber: "",
      airlines: "",
      departureCity: "",
      destinationCity: "",
      seatNumber: "",
      departureTime: "",
      arrivalTime: " ",
    },
    validationSchema: FlightSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form>
      <h1>flight Registration</h1>
      <div className="input-block">
        <label className="input-label" htmlFor="passengername">
          passengername
        </label>
        <input
          id="passengername"
          name="passengername"
          type="string"
          placeholder="passengername"
          onChange={formik.handleChange}
          value={formik.values.passengername}
          onBlur={formik.handleBlur}
        />
        {formik.touched.passengername && formik.errors.passengername && (
          <span>{formik.errors.passengername}</span>
        )}

        <label className="input-label" htmlFor="flightNumber">
          flightNumber
        </label>

        <input
          id="flightNumber"
          name="flightNumber"
          type="Number"
          placeholder="flightNumber"
          onChange={formik.handleChange}
          value={formik.values.flightNumber}
          onBlur={formik.handleBlur}
        />
        {formik.touched.flightNumber && formik.errors.flightNumber && (
          <span>{formik.errors.flightNumber}</span>
        )}

        <label className="input-label" htmlFor="airlines">
          airlines
        </label>
        <input
          id="airlines"
          name="airlines"
          type="string"
          placeholder="airlines"
          onChange={formik.handleChange}
          value={formik.values.airlines}
          onBlur={formik.handleBlur}
        />
        {formik.touched.airlines && formik.errors.airlines && (
          <span>{formik.errors.airlines}</span>
        )}

        <label className="input-label" htmlFor="departurecity">
          departureCity
        </label>
        <input
          id="departurecity"
          name="departurecity"
          type="string"
          placeholder="departureCity"
          onChange={formik.handleChange}
          value={formik.values.departurecity}
          onBlur={formik.handleBlur}
        />
        {formik.touched.departurecity && formik.errors.departurecity && (
          <span>{formik.errors.departurecity}</span>
        )}

        <label className="input-label" htmlFor="destinationCity">
          destinationCity
        </label>
        <input
          id="destinationCity"
          name="destinationCity"
          type="string"
          placeholder="destinationcity"
          onChange={formik.handleChange}
          value={formik.values.destinationCity}
          onBlur={formik.handleBlur}
        />
        {formik.touched.destinationCity && formik.errors.destinationCity && (
          <span>{formik.errors.destinationCity}</span>
        )}

        <label className="input-label" htmlFor="seatNumber">
          seatNumber
        </label>

        <input
          id="seatNumber"
          name="seatNumber"
          type="text"
          placeholder="seatNumber"
          onChange={formik.handleChange}
          value={formik.values.seatNumber}
          onBlur={formik.handleBlur}
        />
        {formik.touched.seatNumber && formik.errors.seatNumber && (
          <span>{formik.errors.seatNumber}</span>
        )}

        <label className="input-label" htmlFor="departureTime">
          departureTime
        </label>

        <input
          id="departureTime"
          name="departureTime"
          type="Date"
          placeholder="Price"
          onChange={formik.handleChange}
          value={formik.values.departureTime}
          onBlur={formik.handleBlur}
        />
        {formik.touched.departureTime && formik.errors.departureTime && (
          <span>{formik.errors.departureTime}</span>
        )}

        <label className="input-label" htmlFor="arrivalTime">
          ArrivalTime
        </label>

        <input
          id="arrivalTime"
          name="arrivalTime"
          type="Date"
          placeholder="arrivalTime"
          onChange={formik.handleChange}
          value={formik.values.arrivalTime}
          onBlur={formik.handleBlur}
        />
        {formik.touched.arrivalTime && formik.errors.arrivalTime && (
          <span>{formik.errors.arrivalTime}</span>
        )}
      </div>
      <button id="submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Flights;
