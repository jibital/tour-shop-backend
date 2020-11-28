import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Tour extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'date',
  })
  startDate?: string;

  @property({
    type: 'date',
  })
  endDate?: string;

  @property({
    type: 'string',
  })
  description?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Tour>) {
    super(data);
  }
}

export interface TourRelations {
  // describe navigational properties here
}

export type TourWithRelations = Tour & TourRelations;
