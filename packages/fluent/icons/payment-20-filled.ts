import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPayment20FilledIcon],svg[fluent-payment-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 4A2.75 2.75 0 0 0 2 6.75V8h16V6.75A2.75 2.75 0 0 0 15.25 4zM18 9H2v4.25A2.75 2.75 0 0 0 4.75 16h10.5A2.75 2.75 0 0 0 18 13.25zm-4.5 4h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1"></svg:path>`,
})
export class FluentPayment20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
