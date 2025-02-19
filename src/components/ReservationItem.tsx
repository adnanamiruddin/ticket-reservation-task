import { IReservation } from "@/interface/ReservationInterface";
import ReservationItemDetail from "./ReservationItemDetail";

interface IReservationItem {
  expandedReservationId: number;
  setExpandedReservationId: (id: number) => void;
  reservation: IReservation;
}

export default function ReservationItem({
  expandedReservationId,
  setExpandedReservationId,
  reservation,
}: IReservationItem) {
  return (
    <div
      className={`rounded-xl border py-2 px-4 cursor-pointer ${
        // BACKGROUND COLOR
        reservation.status === "CONFIRMED"
          ? "bg-blue-200"
          : reservation.status === "CHECKED IN"
          ? "bg-yellow-200"
          : reservation.status === "CHECKED OUT"
          ? "bg-green-200"
          : "bg-gray-700"
      } ${
        reservation.status === "ROOM MAINTENANCE" ? "text-white" : "text-black"
      }`}
      onClick={() =>
        setExpandedReservationId(
          expandedReservationId === reservation.reservationId
            ? -1
            : reservation.reservationId
        )
      }
    >
      <div className="flex items-center">
        <span
          className={`w-2 h-8 rounded-2xl ${
            // LEFT RECTANGLE COLOR
            reservation.status === "CONFIRMED" ? "bg-pink-500" : "bg-gray-700"
          } ${
            reservation.status !== "ROOM MAINTENANCE"
              ? "border border-gray-800"
              : "border-0"
          }`}
        ></span>
        <h1 className="ms-1.5 mb-1 text-lg font-semibold">
          {reservation.status === "ROOM MAINTENANCE"
            ? "Room Maintenance"
            : reservation.guestName}
        </h1>
        {reservation.status !== "ROOM MAINTENANCE" ? (
          <span
            className={`ms-2 text-white uppercase rounded-full py-1 px-4 text-sm font-semibold ${
              // STATUS COLOR
              reservation.status === "CONFIRMED"
                ? "bg-blue-400"
                : reservation.status === "CHECKED IN"
                ? "bg-yellow-400 text-black"
                : reservation.status === "CHECKED OUT"
                ? "bg-green-500"
                : "bg-gray-700"
            }`}
          >
            {reservation.status}
          </span>
        ) : null}
      </div>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          expandedReservationId === reservation.reservationId
            ? "max-h-[1000px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <ReservationItemDetail reservation={reservation} />
      </div>
    </div>
  );
}
