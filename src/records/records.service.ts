import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Record } from './entities/record.entity';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';

@Injectable()
export class RecordsService {
  constructor(
    @InjectRepository(Record)
    private recordRepo: Repository<Record>,
  ) { }

  create(createRecordDto: CreateRecordDto) {
    // const record = this.recordRepo.create(createRecordDto);
    return this.recordRepo.save({
      user: { user_id: createRecordDto.user_id },
      plan: { plan_id: createRecordDto.plan_id },
    });
  }

  findAll() {
    return this.recordRepo.find();
  }

  findOne(id: number) {
    return this.recordRepo.findOne({ where: { record_id: id } });
  }

  update(id: number, updateRecordDto: UpdateRecordDto) {
    return this.recordRepo.update(id, updateRecordDto);
  }

  remove(id: number) {
    return this.recordRepo.delete(id);
  }
  async findByPlanAndUser(planId: number, userId: number) {
    return this.recordRepo.find({
      where: { plan: { plan_id: planId }, user: { user_id: userId } },
    });
  }
}
