import {DefaultCrudRepository} from '@loopback/repository';
import {Tour, TourRelations} from '../models';
import {TourDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TourRepository extends DefaultCrudRepository<
  Tour,
  typeof Tour.prototype.id,
  TourRelations
> {
  constructor(@inject('datasources.tourDB') dataSource: TourDbDataSource) {
    super(Tour, dataSource);
  }
}
