import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnChartLineIcon],svg[typcn-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 15.561a2 2 0 0 0 2.811-.313l2.789-3.486L12.8 13.6a2 2 0 0 0 2.762-.352l4-5a2 2 0 0 0-3.124-2.499l-2.789 3.486L11.2 7.4a2 2 0 0 0-2.762.35l-4 5a2 2 0 0 0 .312 2.811M5 21h14a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2"></svg:path>`,
})
export class TypcnChartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
