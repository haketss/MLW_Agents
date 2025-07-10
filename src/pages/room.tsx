import { Navigate, useParams } from "react-router-dom";

type RoomParams = {
  roomId: string
}

export function Room() {
  const params = useParams<RoomParams>()
  if (!params.roomId) { return <Navigate to="/" replace /> }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <h1 className="text-2xl font-bold">Room {JSON.stringify(params)}</h1>
    </div>
  );
}