import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlansService } from './plans.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { Public } from 'src/utils/public.decorator';

@Controller('plans')
export class PlansController {
  constructor(private readonly plansService: PlansService) { }


  @Public()
  @Post()
  create(@Body() createPlanDto: CreatePlanDto) {
    console.log(createPlanDto);
    return this.plansService.create(createPlanDto);
  }

  @Get()
  findAll() {
    return this.plansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.plansService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlanDto: UpdatePlanDto) {
    return this.plansService.update(+id, updatePlanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plansService.remove(+id);
  }

  @Public()
  @Get('/user/:userId/count')
  getPlanCount(@Param('userId') userId: string) {
    return this.plansService.getPlanCountByUser(+userId);
  }
}
