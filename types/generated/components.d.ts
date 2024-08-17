import type { Schema, Attribute } from '@strapi/strapi';

export interface GeneralOption extends Schema.Component {
  collectionName: 'components_general_options';
  info: {
    displayName: 'Option';
  };
  attributes: {
    Value: Attribute.Text & Attribute.Required;
  };
}

export interface GeneralAnswer extends Schema.Component {
  collectionName: 'components_general_answers';
  info: {
    displayName: 'Answer';
    icon: 'clipboard-list';
    description: '';
  };
  attributes: {
    Value: Attribute.Text & Attribute.Required;
    Correct: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'general.option': GeneralOption;
      'general.answer': GeneralAnswer;
    }
  }
}
