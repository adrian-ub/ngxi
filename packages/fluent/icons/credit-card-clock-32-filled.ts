import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCreditCardClock32FilledIcon],svg[fluent-credit-card-clock-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 5A4.5 4.5 0 0 0 2 9.5V11h28V9.5A4.5 4.5 0 0 0 25.5 5zM2 22.5V13h28v4.343A9 9 0 0 0 14.936 27H6.5A4.5 4.5 0 0 1 2 22.5m21 8a7.5 7.5 0 1 1 0-15a7.5 7.5 0 0 1 0 15M22.75 18a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5H23.5v-3.75a.75.75 0 0 0-.75-.75"></svg:path>`,
})
export class FluentCreditCardClock32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
