import { createApi, fecthBaseQuery, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    // @note this is coming from the options object (from rapid api), these are the headers.
    'x-rapidapi-key': '30564f6b2cmsh4d7f6ce331223b8p10156cjsn7e49f0de5564',
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = "https://coinranking1.p.rapidapi.com/";


// @learning utility func that simply adds the header and url to our calls
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });


export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({ // getCryptos is the specific endpoint the data is coming from
            query: () => createRequest("/coins")    // coins is the actual endpoint we are looking for
        })
    })
});


// @crucial @learning redux: this us a cutom hook redux automatically created
// redux toolkit creates a hook that we can call to instantly to get all data for the query
// It also gives loading states, finalize states and everything else needed while making API calls
export const {
    useGetCryptosQuery,
} = cryptoApi;