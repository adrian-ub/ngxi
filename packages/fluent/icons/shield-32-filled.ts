import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShield32FilledIcon],svg[fluent-shield-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.555 2.168a1 1 0 0 0-1.11 0C12.53 4.112 8.685 6.027 3.901 6.505A1 1 0 0 0 3 7.5V16c0 3.88 2.124 7.17 4.701 9.546c2.572 2.372 5.737 3.971 8.115 4.417l.184.034l.184-.034c2.378-.446 5.543-2.045 8.115-4.417C26.876 23.17 29 19.88 29 16V7.5a1 1 0 0 0-.9-.995c-4.785-.478-8.63-2.393-11.545-4.337"></svg:path>`,
})
export class FluentShield32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
