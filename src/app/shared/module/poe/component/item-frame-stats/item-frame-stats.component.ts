import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Item, Language } from '../../type';

@Component({
  selector: 'app-item-frame-stats',
  templateUrl: './item-frame-stats.component.html',
  styleUrls: ['./item-frame-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemFrameStatsComponent {
  @Input()
  public item: Item;

  @Input()
  public queryItem: Item;

  @Input()
  public language: Language;

  @Input()
  public modifierMinRange: number;

  @Input()
  public modifierMaxRange: number;

  public getValueClass(id: string): string {
    if (!id || id.length === 0) {
      return '';
    }

    if (id.includes('fire_')) {
      return 'fire';
    }
    if (id.includes('cold_')) {
      return 'cold';
    }
    if (id.includes('lightning_')) {
      return 'lightning';
    }
    if (id.includes('chaos_')) {
      return 'chaos';
    }

    return '';
  }
}
