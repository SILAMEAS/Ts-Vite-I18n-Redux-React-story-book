import React from 'react';

export interface Type {
  textLabel?: string;
  setValue?: any;
  value?: string;
  NameId: string;
  type?: React.InputHTMLAttributes<unknown>['type'];
  placeholder: string;
  handleChangeT?: ({a, b}: any) => void;
}
