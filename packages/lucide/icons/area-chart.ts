import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideAreaChartIcon],svg[lucide-area-chart-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 3v18h18"></svg:path><svg:path d="M7 12v5h12V8l-5 5l-4-4Z"></svg:path></svg:g>`,
})
export class LucideAreaChartIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
