import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class SyncService implements OnApplicationBootstrap {
  async onApplicationBootstrap() { await this.runSyncCycle(); }
  @Cron('0 */15 * * * *')
  async scheduledSync() { await this.runSyncCycle(); }
  private async runSyncCycle() {
    console.log('بدء جلب الألعاب وترجمتها بـ Gemini...');
    // منطق جلب البيانات من CheapShark و IGDB هنا
  }
}
