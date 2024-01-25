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

export interface DetailsDetails extends Schema.Component {
  collectionName: 'components_details_details';
  info: {
    displayName: 'details';
    icon: 'dashboard';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface OfferDetailsOfferDetails extends Schema.Component {
  collectionName: 'components_offer_details_offer_details';
  info: {
    displayName: 'offer_details';
    icon: 'doctor';
  };
  attributes: {
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'avantages.avantages': AvantagesAvantages;
      'details.details': DetailsDetails;
      'offer-details.offer-details': OfferDetailsOfferDetails;
    }
  }
}
