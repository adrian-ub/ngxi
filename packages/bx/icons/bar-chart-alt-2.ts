import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBarChartAlt2Icon],svg[bx-bar-chart-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7h-4V4c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H4c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9c0-1.103-.897-2-2-2M4 11h4v8H4zm6-1V4h4v15h-4zm10 9h-4V9h4z"></svg:path>`,
})
export class BxBarChartAlt2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
