import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlowchartCircle24RegularIcon],svg[fluent-flowchart-circle-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 6.5a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h.5v2.69l-1.78 1.78a.75.75 0 0 0 0 1.06l2 2a.75.75 0 0 0 1.06 0l1.78-1.78h2.69v.5c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v.5h-2.69l-1.56-1.56V10.5h.5a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17"></svg:path>`,
})
export class FluentFlowchartCircle24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
