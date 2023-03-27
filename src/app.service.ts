import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectConnection() private connection: Connection) {}

  async checkDatabaseConnection() {
    try {
      await this.connection.db.admin().ping();
      console.log('MongoDB connected successfully!');
    } catch (err) {
      console.error(`Failed to connect to MongoDB: ${err}`);
    }
  }
}
