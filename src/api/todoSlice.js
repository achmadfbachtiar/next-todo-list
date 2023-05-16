import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoSlice = createApi({ 
  reducerPath: 'todoSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getList: builder.query({
      query: ({start, limit}) => `/todos?_start=${start}&_limit=${limit}`,
      providesTags: ['Todos']
    }),
    add: builder.mutation({
      query: (payload) => ({
        url: '/todos',
        method: 'POST',
        body: JSON.stringify(payload)
      }),
      invalidatesTags: ['Todos']
    }),
    update: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'PUT',
        body: JSON.stringify(payload)
      }),
      invalidatesTags: ['Todos']
    }),
  })
})

export const {
  useGetListQuery,
  useAddMutation,
  useUpdateMutation,
} = todoSlice