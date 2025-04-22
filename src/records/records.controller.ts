import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecordsService } from './records.service';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { Public } from 'src/utils/public.decorator';

@Controller('records')
@Public()
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Post()
  @Public()
  create(@Body() createRecordDto: CreateRecordDto) {
    return this.recordsService.create(createRecordDto);
  }

  @Get()
  findAll() {
    return this.recordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecordDto: UpdateRecordDto) {
    return this.recordsService.update(+id, updateRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recordsService.remove(+id);
  }

  @Get('/user/:userId/plan/:planId')
  findByPlanAndUser(
    @Param('userId') userId: number,
    @Param('planId') planId: number,
  ) {
    return this.recordsService.findByPlanAndUser(userId, planId);
  }
}
