import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberCircle532FilledIcon],svg[fluent-number-circle-5-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16m11.498-7a1 1 0 0 0-.995.9l-.5 5A1 1 0 0 0 13.01 16l.128-.002a134 134 0 0 1 1.428-.008c.407 0 .826.003 1.175.01c.375.008.603.02.671.03a3 3 0 1 1-3.016 4.47a1 1 0 0 0-1.732 1a5 5 0 1 0 5.026-7.452a9 9 0 0 0-.908-.048a63 63 0 0 0-1.68-.009l.3-2.991h4.593a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentNumberCircle532FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
