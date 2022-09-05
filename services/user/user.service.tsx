import axios from 'axios'
import { useQuery, UseQueryResult } from 'react-query'
import { IUserInfo } from './user.interface'

// /user/info
export function useGetUserInfo(): UseQueryResult<IUserInfo, Error> {
  return useQuery<IUserInfo, Error>(
    ['userInfo'],
    async () => {
      const { data } = await axios.get<IUserInfo>(`/api/hello`)
      return data
    },
    { cacheTime: 60 * 10 * 1000 },
  )
}
