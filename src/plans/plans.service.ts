import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Plan } from './entities/plan.entity';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { Public } from 'src/utils/public.decorator';
import { Auth } from 'src/auth/entities/auth.entity';

@Injectable()
export class PlansService {
  constructor(
    @InjectRepository(Plan)
    private plansRepository: Repository<Plan>,
    @InjectDataSource() private dataSource: DataSource
  ) { }

  @Public()
  create(createPlanDto: CreatePlanDto) {
    console.log(createPlanDto);
    const plan = this.plansRepository.create({
      user: { user_id: createPlanDto.user_id },
      ...createPlanDto
    });
    return this.plansRepository.save(plan);
  }

  findAll() {
    return this.plansRepository.find({ relations: ['user', 'records'] });
  }

  findOne(id: number) {
    return this.plansRepository.findOne({
      where: { plan_id: id },
      relations: ['user', 'records'],
    });
  }

  update(id: number, updatePlanDto: UpdatePlanDto) {
    return this.plansRepository.update(id, updatePlanDto);
  }

  remove(id: number) {
    return this.plansRepository.delete(id);
  }
  async getPlanCountByUser(userId: number): Promise<Plan[]> {
    const user = await this.dataSource.getRepository(Auth)
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.plans", "plan")
      .where("user.user_id = :id", { id: userId })
      .getOne();

    return user?.plans || [];
  }
}
