import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiViaplayIcon],svg[cbi-viaplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="cbiViaplay0" d="M2.6 12c0 1.4.3 2.8.9 4.1l8.4-4.1l-8.4-4.2c-.6 1.3-1 2.7-.9 4.2M12 2.6c-2.3 0-4.4.8-6.1 2.3l9.8 5.3v3.7l-9.8 5.3c3.9 3.4 9.8 3.1 13.3-.8c3.4-3.9 3.1-9.9-.8-13.3c-1.9-1.7-4.1-2.5-6.4-2.5"></svg:path></svg:defs><svg:use fill="currentColor" href="#cbiViaplay0"></svg:use>`,
})
export class CbiViaplayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
