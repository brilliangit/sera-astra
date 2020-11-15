/* eslint-disable */
import React, { useEffect, useState } from 'react';
import {
    Wrapper, Content,
    CardPerson
} from 'components';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { getDataPerson } from '../../app/controllers';

const Dashboard = (props) => {
    const { person, pagingPerson } = props;
    const [state, setstate] = useState(1)
    const [datas, setDatas] = useState([])
    const fetchMoreData = () => {
        if (state < pagingPerson.totalPages) {
            setstate((state + 1))
        }
    }

    useEffect(() => {
        props.getdata(state);
    }, [state]);

    useEffect(() => {
        const newData = [...datas, ...person];
        setDatas(newData)
    }, [person]);
    return (
        <>
            <Wrapper target="xs">
                <div className="dashboard-page">
                    <InfiniteScroll
                        initialLoad={false}
                        loadMore={fetchMoreData}
                        hasMore={true}
                    >
                        <Content frame={'8px 16px'} >
                            {
                                datas.map((v, i) => (
                                    <CardPerson key={i} {...v} />
                                ))
                            }
                        </Content>
                    </InfiniteScroll>
                </div>
            </Wrapper>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        person: state.DataReducer.person ? state.DataReducer.person : [],
        pagingPerson: state.DataReducer.pagingPerson ? state.DataReducer.pagingPerson : {},
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getdata: (offset) => dispatch(getDataPerson(offset))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);