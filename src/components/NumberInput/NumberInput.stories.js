/**
 * @file Number input stories.
 * @copyright IBM Security 2019
 */

import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { boolean, number, text, object } from '@storybook/addon-knobs';

import React from 'react';

import { components } from '../../../.storybook';

import { NumberInput, NumberInputSkeleton } from '../../';

const props = () => ({
  className: 'some-class',
  id: 'tj-input',
  label: text('Label (label)', 'Number Input label'),
  hideLabel: boolean('No label (hideLabel)', false),
  min: number('Minimum value (min)', 0),
  max: number('Maximum value (max)', 100),
  value: number('Value (value)', 50),
  step: number('Step of up/down arrow (step)', 10),
  disabled: boolean('Disabled (disabled)', false),
  invalid: boolean('Show form validation UI (invalid)', false),
  isMobile: boolean('Mobile variant', false),
  invalidText: text(
    'Form validation UI content (invalidText)',
    'Number is not valid'
  ),
  helperText: text('Helper text (helperText)', 'Optional helper text.'),
  light: boolean('Light variant (light)', false),
  onChange: action('onChange'),
  onClick: action('onClick'),
  allowEmpty: boolean('Allow empty value (allowEmpty)', false),
  numberInputArrowTranslationIds: object(
    'Number input arrow icon translation IDs (for translateWithId callback)',
    {
      'increment.number': 'Increment number',
      'decrement.number': 'Decrement number',
    }
  ),
});

storiesOf(components('NumberInput'), module)
  .addDecorator(withA11y)
  .addDecorator(centered)
  .add(
    'Default',
    () => {
      const { numberInputArrowTranslationIds, ...rest } = props();
      return (
        <NumberInput
          translateWithId={id => numberInputArrowTranslationIds[id]}
          {...rest}
        />
      );
    },
    {
      info: {
        text: `
            Number inputs are similar to text fields, but contain controls used to increase or decrease an incremental value.
            The Number Input component can be passed a starting value, a min, a max, and the step.
          `,
      },
    }
  )
  .add('skeleton', () => <NumberInputSkeleton />, {
    info: {
      text: `
            Placeholder skeleton state to use when content is loading.
          `,
    },
  });
