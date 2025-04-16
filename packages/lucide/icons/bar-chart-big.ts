import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBarChartBigIcon],svg[lucide-bar-chart-big-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 3v18h18"></svg:path><svg:rect width="4" height="7" x="7" y="10" rx="1"></svg:rect><svg:rect width="4" height="12" x="15" y="5" rx="1"></svg:rect></svg:g>`,
})
export class LucideBarChartBigIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
