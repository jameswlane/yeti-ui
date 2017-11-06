import * as React from 'react';

import {
  ILinkProp,
  listOfButtonProps,
  removeProps,
} from '../../utilities';
import { generateStyle } from './styles';

class Link extends React.PureComponent<ILinkProp, {}> {
  public render() {
    const styles = generateStyle(this.props);

    return (
      <a
        {...removeProps(this.props, listOfButtonProps)}
        {...styles}/>
    );
  }
}

export default Link;
