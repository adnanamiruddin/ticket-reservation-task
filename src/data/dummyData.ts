import { IReservation } from "@/interface/ReservationInterface";

const reservationsDummyData: IReservation[] = [
  {
    reservationId: 155,
    guestName: "Ivan",
    status: "CONFIRMED",
    checkInDate: "Thu, Feb 06, 2025",
    checkOutDate: "Mon, Feb 10, 2025",
    countOfNights: 4,
    roomCode: "301",
    roomType: "Family",
    reservationSource: "Expedia",
    totalBill: 4000000,
    outstandingPayment: 2500000,
    internalNotes: "-",
  },
  {
    reservationId: 152,
    guestName: "Michael A",
    status: "CHECKED IN",
    checkInDate: "Thu, Feb 06, 2025",
    checkOutDate: "Mon, Feb 10, 2025",
    countOfNights: 4,
    roomCode: "301",
    roomType: "Family",
    reservationSource: "Expedia",
    totalBill: 4000000,
    outstandingPayment: 2500000,
    internalNotes: "-",
  },
  {
    reservationId: 153,
    guestName: "-",
    status: "ROOM MAINTENANCE",
    checkInDate: "Sun, Feb 02, 2025",
    checkOutDate: "Fri, Feb 07, 2025",
    countOfNights: 5,
    roomCode: "201",
    roomType: "Deluxe",
    reservationSource: "Expedia",
    totalBill: 4000000,
    outstandingPayment: 2500000,
    internalNotes: "-",
  },
  {
    reservationId: 154,
    guestName: "John Doe",
    status: "CHECKED OUT",
    checkInDate: "Thu, Feb 06, 2025",
    checkOutDate: "Mon, Feb 10, 2025",
    countOfNights: 4,
    roomCode: "301",
    roomType: "Family",
    reservationSource: "Expedia",
    totalBill: 4000000,
    outstandingPayment: 2500000,
    internalNotes: "-",
  },
];

export const getReservationsDummyData = () => {
  return reservationsDummyData;
};
