import { IReservation } from "@/interface/ReservationInterface";
import { LuClock3 } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { HiPaperClip } from "react-icons/hi2";
import { RiCoinsLine } from "react-icons/ri";
import { GrNotes } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";

interface IReservationItemDetail {
  reservation: IReservation;
}

export default function ReservationItemDetail({
  reservation,
}: IReservationItemDetail) {
  const formatToRupiah = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  };

  return (
    <div className="mt-3 flex flex-col gap-3 font-medium text-sm">
      <div className="flex items-center gap-2">
        <LuClock3 className="text-xl shrink-0 text-black" />
        <p>{`${reservation.checkInDate} - ${reservation.checkOutDate} (${reservation.countOfNights} Nights)`}</p>
      </div>

      <div className="flex items-center gap-2">
        <GrLocation className="text-xl shrink-0 text-black" />
        <p>{`Room: ${reservation.roomCode} (${reservation.roomType})`}</p>
      </div>

      {reservation.status !== "ROOM MAINTENANCE" ? (
        <>
          <div className="flex items-center gap-2">
            <HiPaperClip className="text-xl shrink-0 text-black" />
            <p>{`Reservation ID: ${reservation.reservationId} (${reservation.reservationSource})`}</p>
          </div>

          <div className="flex items-center gap-2">
            <RiCoinsLine className="text-xl shrink-0 text-black" />
            <p>{`Total bill: ${formatToRupiah(reservation.totalBill)}`}</p>
          </div>

          <div className="flex items-center gap-2">
            <RiCoinsLine className="text-xl shrink-0 text-black" />
            <p>{`Outstanding payment: ${formatToRupiah(
              reservation.outstandingPayment
            )}`}</p>
          </div>
        </>
      ) : null}

      <div className="flex items-center gap-2">
        <GrNotes className="text-xl shrink-0 text-black" />
        <p>{`Internal notes: ${reservation.internalNotes}`}</p>
      </div>

      <div className="mt-2 pb-2 flex items-start gap-4">
        {reservation.status !== "ROOM MAINTENANCE" ? (
          <div className="flex items-center gap-2 border-b border-black pb-2">
            <p>Confirmed</p>
            <IoIosArrowDown className="text-lg" />
          </div>
        ) : null}

        <div
          className={`border-b pb-2 ${
            reservation.status === "ROOM MAINTENANCE"
              ? "border-white"
              : "border-black"
          }`}
        >
          <p>View details</p>
        </div>
      </div>
    </div>
  );
}
