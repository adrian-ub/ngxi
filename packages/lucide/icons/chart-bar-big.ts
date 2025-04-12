import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChartBarBigIcon],svg[lucide-chart-bar-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 3v16a2 2 0 0 0 2 2h16"></svg:path><svg:rect width="9" height="4" x="7" y="13" rx="1"></svg:rect><svg:rect width="12" height="4" x="7" y="5" rx="1"></svg:rect></svg:g>`
})
export class LucideChartBarBigIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
