import { Auth } from "src/auth/entities/auth.entity";
import { Record } from "src/records/entities/record.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Plan {
    @PrimaryGeneratedColumn()
    plan_id: number;

    @Column()
    title: string;

    @Column()
    memo: string;

    @ManyToOne(() => Auth, user => user.plans)
    @JoinColumn({ name: 'user_id' })
    user: Auth;

    @OneToMany(() => Record, record => record.plan)
    @JoinColumn({ name: 'record_id' })
    records: Record[]
}
