import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCertificate32FilledIcon],svg[fluent-certificate-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 4A3.25 3.25 0 0 0 2 7.25v7.92a7 7 0 0 1 11.5 7.938V25h13.25A3.25 3.25 0 0 0 30 21.75V7.25A3.25 3.25 0 0 0 26.75 4zM9 10h14a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2m7 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1m-3 1.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-1 5.362A6.97 6.97 0 0 1 7.5 26.5A6.97 6.97 0 0 1 3 24.862V29a1 1 0 0 0 1.528.849l2.972-1.85l2.972 1.85a1 1 0 0 0 1.528-.85z"></svg:path>`,
})
export class FluentCertificate32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
