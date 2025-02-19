export interface IReservation {
  reservationId: number;
  guestName: string;
  status: "CONFIRMED" | "CHECKED IN" | "CHECKED OUT" | "ROOM MAINTENANCE";
  checkInDate: string;
  checkOutDate: string;
  countOfNights: number;
  roomCode: string;
  roomType: string;
  reservationSource: string;
  totalBill: number;
  outstandingPayment: number;
  internalNotes: string;
}
