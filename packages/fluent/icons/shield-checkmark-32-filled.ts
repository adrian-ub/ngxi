import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShieldCheckmark32FilledIcon],svg[fluent-shield-checkmark-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.555 2.168a1 1 0 0 0-1.11 0C12.53 4.112 8.685 6.027 3.901 6.505A1 1 0 0 0 3 7.5V16c0 3.88 2.124 7.17 4.701 9.546c2.572 2.372 5.737 3.971 8.115 4.417l.184.034l.184-.034q.421-.08.872-.205a9 9 0 1 1 11.94-13.47Q29 16.144 29 16V7.5a1 1 0 0 0-.9-.995c-4.785-.478-8.63-2.393-11.545-4.337M23 15.5a7.5 7.5 0 1 1 0 15a7.5 7.5 0 0 1 0-15m4.53 4.72a.75.75 0 0 0-1.06 0l-4.72 4.72l-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0 0-1.06"></svg:path>`,
})
export class FluentShieldCheckmark32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
