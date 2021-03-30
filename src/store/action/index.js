import { useDispatch } from "react-redux";
import axios from "axios";

// custom hooks，return a method to get layers and clubs data，and update that to store 
function useResData() {
  const dispatch = useDispatch();

  return () => {
    dispatch({
      type: "RESDATA_LOADING"
    });
    Promise.all([
      axios.get('http://localhost:3000/players'),
      axios.get('http://localhost:3000/clubs')
    ]).then(axios.spread(function (players, clubs) {
      let resData = { players: players.data, clubs: clubs.data };
      dispatch({
        type: "RESDATA_LOAD",
        data: resData
      })
    })).catch(error => console.log(error));
  }
}

export { useResData }