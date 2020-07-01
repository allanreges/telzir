import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import React from 'react';
import { DataProvider } from '../../context';
import api from '../../services/api';
import Home from '../../pages/Home';

const apiMock = new MockAdapter(api);

describe('Context hook', () => {
  it('should be able to create the Context', async () => {
    const plans = apiMock.onGet('/plans').reply(200, [
      {
        id: 1,
        label: 'FaleMais 30',
        minutes: 30,
      },
      {
        id: 2,
        label: 'FaleMais 60',
        minutes: 60,
      },
      {
        id: 3,
        label: 'FaleMais 120',
        minutes: 120,
      },
    ]);
    const combinations = apiMock.onGet('/combinations').reply(200, [
      {
        id: 1,
        origin: '011',
        destiny: '016',
        priceMin: 1.9,
      },
      {
        id: 2,
        origin: '016',
        destiny: '011',
        priceMin: 2.9,
      },
      {
        id: 3,
        origin: '011',
        destiny: '017',
        priceMin: 1.7,
      },
      {
        id: 4,
        origin: '017',
        destiny: '011',
        priceMin: 1.9,
      },
      {
        id: 5,
        origin: '011',
        destiny: '018',
        priceMin: 0.9,
      },
      {
        id: 6,
        origin: '018',
        destiny: '011',
        priceMin: 1.9,
      },
    ]);
    const { result, waitForNextUpdate } = renderHook(() =>
      DataProvider({ children: <Home /> }),
    );

    await waitForNextUpdate();

    expect(result.current.props.value).toHaveProperty('plans');
    expect(result.current.props.value).toHaveProperty('combinations');
  });
});
