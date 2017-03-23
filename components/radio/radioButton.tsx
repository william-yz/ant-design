import React, { PropTypes } from 'react';
import Radio from './radio';

export interface RadioButtonProps {
  value: string | number;
  style?: React.CSSProperties;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (e: any) => any;
}

export default class RadioButton extends React.Component<RadioButtonProps, any> {
  static defaultProps = {
    prefixCls: 'ant-radio-button',
  };

  static contextTypes = {
    group: PropTypes.any,
  };

  render() {
    let radioProps: RadioButtonProps = { ...this.props };
    if (this.context.group) {
      radioProps.onChange = this.context.group.onChange;
      radioProps.checked = this.props.value === this.context.group.value;
      radioProps.disabled = this.props.disabled || this.context.group.disabled;
    }

    return (
      <Radio {...radioProps} />
    );
  }
}
