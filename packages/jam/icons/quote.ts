import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamQuoteIcon],svg[jam-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 0a1 1 0 1 1 0 2c-.893 0-1.695.39-2.245 1.01A3 3 0 1 1 0 6V5a5 5 0 0 1 5-5m8 0a1 1 0 0 1 0 2c-.893 0-1.695.39-2.245 1.01A3 3 0 1 1 8 6V5a5 5 0 0 1 5-5M3 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m8 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class JamQuoteIcon {
  readonly viewBox = input("0 0 14 9")
  readonly width = input("1.56em")
  readonly height = input("1em")
}
