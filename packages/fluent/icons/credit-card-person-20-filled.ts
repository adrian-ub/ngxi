import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCreditCardPerson20FilledIcon],svg[fluent-credit-card-person-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75V8H2zM2 9h12.5a3 3 0 0 0-2.227 5.01A2.5 2.5 0 0 0 10.05 16h-5.3A2.75 2.75 0 0 1 2 13.25zm14.5 3a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S11 17.75 11 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5"></svg:path>`,
})
export class FluentCreditCardPerson20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
