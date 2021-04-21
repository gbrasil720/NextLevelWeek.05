import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { User } from './User'

@Entity('messages')
export class Message {
  @PrimaryColumn()
  id: string

  @Column()
  admin_id: string

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User) // Many messages to one user
  user: User

  @Column()
  user_id: string

  @Column()
  text: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if(!this.id) {
      this.id = uuid()
    }
  }
}