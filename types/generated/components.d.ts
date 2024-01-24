import type { Schema, Attribute } from '@strapi/strapi';

export interface AvantagesAvantages extends Schema.Component {
  collectionName: 'components_avantages_avantages';
  info: {
    displayName: 'avantages';
    icon: 'apps';
  };
  attributes: {
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'avantages.avantages': AvantagesAvantages;
    }
  }
}
