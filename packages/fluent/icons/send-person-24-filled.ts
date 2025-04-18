import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSendPerson24FilledIcon],svg[fluent-send-person-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.815 11.95l-7.532 1.255a.5.5 0 0 0-.386.318L2.3 20.481c-.248.64.421 1.25 1.035.942l10.712-5.356a3.5 3.5 0 0 1 5.98-2.99l1.308-.654a.75.75 0 0 0 0-1.341l-18-9c-.614-.307-1.283.303-1.035.942l2.598 6.958a.5.5 0 0 0 .386.318l7.532 1.255a.2.2 0 0 1 0 .395M20 15.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m2 5.375C22 22.431 20.714 24 17.5 24S13 22.437 13 20.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"></svg:path>`,
})
export class FluentSendPerson24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
