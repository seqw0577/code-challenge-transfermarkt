export default function resData(resData = {
  loading: false,
  data:[]
}, action) {
  switch (action.type) {
    case "RESDATA_LOADING":
      return {
        ...resData,
        loading: true,
        data:[]
      }
    case "RESDATA_LOAD":
      return {
        ...resData,
        loading: false,
        data:action.data
      }
    default:
      break;
  }
  return resData;
}



