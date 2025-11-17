import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const studentsApi = createApi({
  reducerPath: 'studentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/students' }),
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: () =>`/`,
    }),
    getStudentDetailsById:builder.query({
        query:(id) => `/${id}`
      }),
    addStudent:builder.mutation({
      query: (student) => ({
        url:`/`,
        method: 'POST',
        body: student,
      }),
    }),
    deleteStudent:builder.mutation({
      query:(id) => ({
        url:`/${id}`,
        method:"DELETE"
      }),
    }),
    updateStudent:builder.mutation({
      query:(student) => ({
        url:`/${student['_id']}`,
        method:"PUT",
        body:student,
      })
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
 useGetAllStudentsQuery,
  useLazyGetAllStudentsQuery,
  useGetStudentDetailsByIdQuery,
  useLazyGetStudentDetailsByIdQuery,
  useAddStudentMutation,
  useDeleteStudentMutation,
  useUpdateStudentMutation,
  useLoginUserMutation,
} = studentsApi