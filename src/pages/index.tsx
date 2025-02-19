import ReservationItem from "@/components/ReservationItem";
import { getReservationsDummyData } from "@/data/dummyData";
import { IReservation } from "@/interface/ReservationInterface";
import { useEffect, useState } from "react";
import { FcEmptyTrash } from "react-icons/fc";
import { FiX } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";

export default function Home() {
  const [reservations, setReservations] = useState<IReservation[]>([]);
  const [expandedReservationId, setExpandedReservationId] =
    useState<number>(-1);

  const fetchReservationsData = () => {
    setReservations(getReservationsDummyData());
  };
  //
  useEffect(() => {
    fetchReservationsData();
  }, []);

  const [searchQuery, setSearchQuery] = useState<string>("");
  //
  const filteredReservations = reservations.filter(
    (reservation) =>
      reservation.guestName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reservation.reservationId.toString().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen p-4 mx-auto md:max-w-xl md:p-4 md:border-2 md:border-gray-300 md:rounded-lg md:my-8 md:min-h-[90vh]">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by guest name or ID"
          className="w-full pl-10 py-3 text-sm border rounded-md placeholder:text-gray-400 focus:outline-none focus:border-gray-400 transition-all duration-300"
        />
        <IoIosSearch className="absolute left-3 top-[30%] text-xl text-gray-500" />
        {searchQuery ? (
          <FiX
            className="absolute right-3 top-[30%] text-xl text-gray-500 cursor-pointer"
            onClick={() => setSearchQuery("")}
          />
        ) : null}
      </div>

      <div className="mt-4 flex flex-col gap-2">
        {filteredReservations.length > 0 ? (
          filteredReservations.map((reservation, i) => (
            <ReservationItem
              key={i}
              expandedReservationId={expandedReservationId}
              setExpandedReservationId={setExpandedReservationId}
              reservation={reservation}
            />
          ))
        ) : (
          <div>
            <FcEmptyTrash className="text-6xl text-gray-500 mx-auto" />
            <p className="text-gray-500 text-center mt-2">
              No reservations found
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
