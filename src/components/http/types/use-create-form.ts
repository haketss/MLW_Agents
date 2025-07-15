import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateRoomsRequest } from "./create-room-request";
import type { CreateRoomsResponse } from "./create-room-response";

export function UseCreateRoom() {
    const queryCleint = useQueryClient()

    return useMutation({
        mutationFn: async (data: CreateRoomsRequest) => {
            const response = await fetch('http://localhost:3333/rooms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const result: CreateRoomsResponse = await response.json()

            return result
        },

        onSuccess: () => {
            queryCleint.invalidateQueries({ queryKey: ['get-rooms'] })
        }
    })
}