import React, { useEffect } from "react";
import qs from "qs";
import { useSelector } from "react-redux";
import { useLocation, Link, useHistory } from "react-router-dom";
import { useResData } from "../../store/action";
import { Table, Avatar } from "antd";

function createClubsFilter(array) {
  return array && array.map(({ id, name }) => ({ value: id, text: name }));
}

function IndexPage() {
  const { data } = useSelector(state => state.resData);
  const getData = useResData();
  const { push } = useHistory();
  const { search } = useLocation();
  const { ageOrder, clubIds } = qs.parse(search.slice(1));
  const deaultClubIds = clubIds ? clubIds.split(",") : null;

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      // sorter: {
      //   compare: (a, b) => a.name.localeCompare(b.name)
      // },
      // sortDirections: ['ascend', 'descend', 'ascend'],
      // defaultSortOrder: 'ascend',
      render: (text, record) => <Link to={"/player/" + record.id}>
        <Avatar src={record.image} shape="square" size={48} />
        <span style={{ display: 'inline-block', marginLeft: '10px', color: '#1d75a3' }}>{record.name}</span>
      </Link>,
      width: 300
    },
    {
      title: 'Alter',
      dataIndex: 'age',
      // sortDirections: ['ascend', 'descend', 'ascend'],
      defaultSortOrder: ageOrder,
      sorter: (a, b) => a.age - b.age,
      width: 100
    },
    {
      title: 'Vereinsname',
      dataIndex: 'clubId',
      render: (clubId) => data.clubs.filter(club => club.id === parseInt(`${clubId}`)).map(club => club.name),
      defaultFilteredValue: deaultClubIds,
      filters: createClubsFilter(data.clubs),
      onFilter: (value, record) => record.clubId.indexOf(value) === 0
    }
  ];
  useEffect(() => { getData() }, []);

  function onChange(pagination, filters, sorter) {
    if (filters.clubId !== null) {
      push(`/?clubIds=${filters.clubId}`)
      if (sorter.order !== null) {
        push(`/?clubIds=${filters.clubId}&ageOrder=${sorter.order}`)
      }
    } else if (sorter.order !== null) {
      push(`/?ageOrder=${sorter.order}`)
    }
  }

  return <div className="main">
      <Table columns={columns} dataSource={data.players} pagination={false} rowKey={(data) => data.id} onChange={onChange} />
  </div>
}

export default IndexPage;