import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentClockBill16RegularIcon],svg[fluent-clock-bill-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7a7 7 0 0 1-7 7v-1a6 6 0 1 0-5.918-7H2.07A7.002 7.002 0 0 1 16 7m-8-.236c.371.332.66.756.829 1.236h2.67a.5.5 0 1 0 0-1H9V3.5a.5.5 0 1 0-1 0zM0 9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.5 0h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m0 2h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m0 2h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1"></svg:path>`,
})
export class FluentClockBill16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
