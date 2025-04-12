import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChartNoAxesColumnDecreasingIcon],svg[lucide-chart-no-axes-column-decreasing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20V10m6 10v-4M6 20V4"></svg:path>`
})
export class LucideChartNoAxesColumnDecreasingIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
