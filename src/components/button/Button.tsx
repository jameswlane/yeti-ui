import * as React from 'react';

import {
  IButtonProp,
  listOfButtonProps,
  removeProps,
} from '../../utilities';
import { generateStyle } from './styles';

class Button extends React.PureComponent<IButtonProp, {}> {
  private defaultProps: IButtonProp = {
    isDisabled: false,
  };

  public render() {
    const styles = generateStyle(this.props);
    const { isDisabled } = this.props;

    return (
      <button
        {...removeProps(this.props, listOfButtonProps)}
        {...styles}
        disabled={isDisabled}/>
    );
  }
}

export default Button;
