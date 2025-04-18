import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonSquareCheckmark32FilledIcon],svg[fluent-person-square-checkmark-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v8.792A8.97 8.97 0 0 0 23 14c-2.143 0-4.112.75-5.657 2h-5.914A2.43 2.43 0 0 0 9 18.429c0 3.02 2.153 5.205 5.092 5.864a8.97 8.97 0 0 0 2.2 4.707H7.5A4.5 4.5 0 0 1 3 24.5zm16.75 3.25a3.75 3.75 0 1 0-7.5 0a3.75 3.75 0 0 0 7.5 0M23 15.5a7.5 7.5 0 1 1 0 15a7.5 7.5 0 0 1 0-15m4.53 4.72a.75.75 0 0 0-1.06 0l-4.72 4.72l-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0 0-1.06"></svg:path>`,
})
export class FluentPersonSquareCheckmark32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
