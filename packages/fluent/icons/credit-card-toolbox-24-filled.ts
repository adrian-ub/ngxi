import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCreditCardToolbox24FilledIcon],svg[fluent-credit-card-toolbox-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8.25A3.25 3.25 0 0 1 5.25 5h13.5A3.25 3.25 0 0 1 22 8.25V9.5H2zM15.75 11H2v4.75A3.25 3.25 0 0 0 5.25 19H11v-2.75a2.5 2.5 0 0 1 2-2.45v-.05A2.75 2.75 0 0 1 15.75 11m-2.25 3.75h.5v-1c0-.966.784-1.75 1.75-1.75h3.5c.966 0 1.75.784 1.75 1.75v1h.5a1.5 1.5 0 0 1 1.5 1.5V18h-3v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-3v-1.75a1.5 1.5 0 0 1 1.5-1.5m2.25-1.25a.25.25 0 0 0-.25.25v1h4v-1a.25.25 0 0 0-.25-.25zm3.25 6V19h-3v.5a.5.5 0 0 1-1 0V19h-3v2.5a1.5 1.5 0 0 0 1.5 1.5h8a1.5 1.5 0 0 0 1.5-1.5V19h-3v.5a.5.5 0 0 1-1 0"></svg:path>`,
})
export class FluentCreditCardToolbox24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
