import { useQuery, UseQueryResult } from "react-query";
import { ISlideInfo } from "./slide.interface";
import staticContent from "../../static-content.json";

export function useGetSlides(): UseQueryResult<ISlideInfo, Error> {
  return useQuery<ISlideInfo, Error>(
    ["slideInfo"],
    () => {
      console.log('******************');
      console.log("called");
      console.log('******************');
      
      return staticContent.slides as any},
    { cacheTime: 60 * 10 * 1000 }
  );
}
