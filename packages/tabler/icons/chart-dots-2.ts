import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartDots2Icon],svg[tabler-chart-dots-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 3v18h18"></svg:path><svg:path d="M7 15a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4-10a2 2 0 1 0 4 0a2 2 0 1 0-4 0m5 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0m5-9l-6 1.5m-.887 2.15l2.771 3.695M16 12.5l-5 2"></svg:path></svg:g>`,
})
export class TablerChartDots2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
