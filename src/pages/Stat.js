import React, { Component } from 'react';
import styled from 'styled-components';

import Menu from 'components/Menu';
import List from 'components/_parts/_List';
import Map from 'components/_parts/_Map';
import { covidService } from 'services/covid.service';

const RightContent = styled.div`
  flex: 2;
  padding: 100px 100px 60px;
  position: relative;
  background: #F3F4F6;
`;

const PageContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const SwitchView = styled.div`
  position: absolute;
  right: 30px;
  top: 30px;
  width: auto;
  display: flex;
`;

const SwitchViewItem = styled.div`
  font-weight: normal;
  font-size: 16px;
  color: rgba(17,24,39,0.25);
  cursor: pointer;
  padding: 15px;

  &:first-child {
    border-right: 1px solid #111827;
  }

  &.active {
    color: rgba(17,24,39,1);
  }

  & * {
    cursor: pointer;
  }
  
`;

const SwitchInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
`;

const SelectRange = styled.select`
  background: none;
  border: 0;
  height: 38px;
  border-bottom: 1px solid #4B5563;
  color: #4B5563;
  font-weight: 300;
  font-size: 16px;
  font-family: Koho Regular;
  outline: 0;
  padding-right: 10px;
`;


class StatPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      datas: [],
      view: 'list'
    }
  }

  componentDidMount() {
    this.loadDatas('day').then(datas => this.setState({datas}));
  }

  loadDatas = async (filter_data) => {
    try {
      const summary = await covidService.summary(filter_data);
      const other = await covidService.other();
      let datas_temp = {};
      let datas = {};

      summary.summary.map(function(d){
        datas_temp[d.province] = {...d};
        return false;
      });
      
      other.prov.map(function(d){
        datas_temp[d.province] = {...datas_temp[d.province], ...d};
        return false;
      });

      Object.entries(datas_temp).map(function(d){
        datas[d[1].province_short] = {...d[1]}
        if ( d[1].province_short !== 'RP'){
          datas[d[1].province_short]['cases_relative'] = (datas[d[1].province_short].cases / datas[d[1].province_short].pop * 100000).toFixed(2)
          datas[d[1].province_short]['deaths_relative'] = (datas[d[1].province_short].deaths / datas[d[1].province_short].pop * 100000).toFixed(2)
        }else{
          datas[d[1].province_short]['cases_relative'] = "N.C."
          datas[d[1].province_short]['deaths_relative'] = "N.C."
        }
        return 0
      })
      return datas
    } catch (error) {
      
    }
  }

  handleChangeFilter = (event) => {
    const date_filter = event.target.value;
    this.loadDatas(date_filter).then(datas => this.setState({datas}));
  }

  handleChangeView = (event) => {
    const view = event.target.value;
    this.setState({view: view});
  }
  
  render(){
    const { datas, view } = this.state;
    const { indicator, mode } = this.props.match.params;
    return ( 
        <PageContent>
        { datas && datas.length !== 0 &&
         <>
            <Menu/>

            <RightContent>

              <SwitchView onChange={this.handleChangeView}>
                <SwitchViewItem className={view === 'map' ? 'active' : ''}>
                  <SwitchInput id="map" type="radio" value="map" name="view" />
                  <label for="map">Carte</label>
                </SwitchViewItem>

                <SwitchViewItem className={view === 'list' ? 'active' : ''}>
                  <SwitchInput id="list" type="radio" value="list" name="view" defaultChecked/>
                  <label for="list">Liste</label>
                </SwitchViewItem>
              </SwitchView>

              <SelectRange 
                value={this.state.filter_date}
                onChange={this.handleChangeFilter}
                className={view === 'map' ? 'bottom-display' : ''}
              >
                <option value="day">Dernier jour</option>
                <option value="month">Dernier mois</option>
                <option value="semester">Dernier trimestre</option>
              </SelectRange>

              { view === 'list' ?
                <List datas={datas} indicator={indicator} mode={mode} />
              :
                <Map datas={datas} indicator={indicator} mode={mode} />
              }
            </RightContent>
            </>
        }
        </PageContent>
    )
  }
}
     
export default StatPage;