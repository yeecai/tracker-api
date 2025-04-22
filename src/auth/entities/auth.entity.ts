import { Plan } from "src/plans/entities/plan.entity";
import { Record } from "src/records/entities/record.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Auth {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    name: string;

    @Column()
    password: string;

    @OneToMany(() => Plan, plan => plan.user)
    plans: Plan[]

    @OneToMany(() => Record, record => record.user)
    records: Record[]
}
