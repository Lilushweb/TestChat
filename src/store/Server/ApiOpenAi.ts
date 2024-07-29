import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const openAiApi = createApi({
    reducerPath: 'openAiApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://bothub.chat/api/v2/openai/v1",
        prepareHeaders: (headers) => {
            headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MGE2ZTgxLTRiMDMtNGQxNC1hMGQxLWI3N2RkZjlkMDY2ZiIsImlzRGV2ZWxvcGVyIjp0cnVlLCJpYXQiOjE3MjA1Mjk0NDgsImV4cCI6MjAzNjEwNTQ0OH0.Dm8QJpXfX2ChWcYZ5c0SLNzGpmEmh1dYPAMW3wz4v5M');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        createChatCompletion: builder.mutation({
            query: (body) => ({
                url: '/chat/completions',
                method: 'POST',
                body,
            })
        })
    })
})

export const { useCreateChatCompletionMutation } = openAiApi;
