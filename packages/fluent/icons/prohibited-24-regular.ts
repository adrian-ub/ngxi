import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentProhibited24RegularIcon],svg[fluent-prohibited-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m6.517 4.543L6.543 18.517A8.5 8.5 0 0 0 18.517 6.543M12 3.5a8.5 8.5 0 0 0-6.517 13.957L17.457 5.483A8.47 8.47 0 0 0 12 3.5"></svg:path>`,
})
export class FluentProhibited24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
