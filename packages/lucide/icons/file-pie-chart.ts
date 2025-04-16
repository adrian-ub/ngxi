import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFilePieChartIcon],svg[lucide-file-pie-chart-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 2v4a2 2 0 0 0 2 2h4"></svg:path><svg:path d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5m.017 4.012a6 6 0 1 0 8.466 8.475"></svg:path><svg:path d="M8 16v-6a6 6 0 0 1 6 6z"></svg:path></svg:g>`,
})
export class LucideFilePieChartIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
