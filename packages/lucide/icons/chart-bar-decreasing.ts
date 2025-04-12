import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChartBarDecreasingIcon],svg[lucide-chart-bar-decreasing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3v16a2 2 0 0 0 2 2h16M7 11h8m-8 5h3M7 6h12"></svg:path>`
})
export class LucideChartBarDecreasingIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
