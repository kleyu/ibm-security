/**
 * @file Card stories.
 * @copyright IBM Security 2019
 */

import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React from 'react';

import { components } from '../../../.storybook';

import { Card, CardSkeleton, SearchBar, StatusIcon } from '../..';

import { image, label, link, tag, text as bodyText, title } from './_mocks_';

const footerDescription = 'Status';
const headerPrefix = `header.`;

const props = () => ({
  header: {
    tag: text(`Subtitle (${headerPrefix}tag)`, tag),
    image: text(`Icon (${headerPrefix}image)`, image),
    title: text(`Title (${headerPrefix}title)`, title),
  },

  body: {
    text: text('Description (body.text)', bodyText),
  },

  footer: {
    children: (
      <StatusIcon
        description={footerDescription}
        message={footerDescription}
        status="success"
      />
    ),
  },
});

const searchLabelText = 'Search';

storiesOf(components('Card'), module)
  .addDecorator(centered)
  .addDecorator(withA11y)
  .add('Default', () => <Card />)
  .add('Content', () => (
    <Card
      {...props()}
      label={text('Icon label (label)', label)}
      link={text('Link (link)', link)}
      onClick={action('onClick')}
    />
  ))
  .add('Child with light background', () => (
    <Card>
      <SearchBar
        clearButtonLabelText="Clear"
        labelText={searchLabelText}
        placeHolderText={searchLabelText}
        submitLabel="Submit"
      />
    </Card>
  ))
  .add('Skeleton', () => (
    <Card>
      <CardSkeleton />
    </Card>
  ));
