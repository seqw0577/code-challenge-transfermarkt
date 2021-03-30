import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from 'antd';
import { useSelector } from "react-redux";
import { useResData } from "../../store/action";

const { Meta } = Card;

function PlayerPage() {
  const { id } = useParams();
  const getData = useResData();
  useEffect(() => { getData() }, []);
  const { data } = useSelector(state => state.resData);
  const playerData = data.players && data.players.find(o => o.id === id);

  return (
    <div>
      { playerData && <Card style={{ width: 480 }} cover={<img alt={playerData.name} src={playerData.image} />} >
        <Meta title={playerData.name} description={'Nationalität: ' + playerData.nationality} className="asdf"></Meta>
        <p>{'Geburtstag: ' + new Date(playerData.dateOfBirth).toLocaleDateString()}</p>
      </Card>}
    </div>
  );
}

export default PlayerPage;
