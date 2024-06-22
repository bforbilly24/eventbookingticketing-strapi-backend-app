import type { Schema, Attribute } from '@strapi/strapi';

export interface DetailsDetails extends Schema.Component {
  collectionName: 'components_details_details';
  info: {
    displayName: 'details';
    description: '';
  };
  attributes: {
    feature: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'details.details': DetailsDetails;
    }
  }
}
