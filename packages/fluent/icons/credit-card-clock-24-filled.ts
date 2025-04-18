import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCreditCardClock24FilledIcon],svg[fluent-credit-card-clock-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 5A3.25 3.25 0 0 0 2 8.25V9.5h20V8.25A3.25 3.25 0 0 0 18.75 5zm0 14h5.924a6.5 6.5 0 0 1 6.326-8H2v4.75A3.25 3.25 0 0 0 5.25 19M23 17.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentCreditCardClock24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
