import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundBrowserNotSupportedIcon],svg[ic-round-browser-not-supported-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6v10.5l1.95 1.95c.03-.15.05-.3.05-.45V6c0-1.1-.9-2-2-2H6.5l2 2zM3.86 3.95a.9.9 0 0 0-1.27 0a.9.9 0 0 0 0 1.27l.41.42V18c0 1.1.9 2 2 2h12.36l1.42 1.42a.9.9 0 0 0 1.27 0a.9.9 0 0 0 0-1.27zM5 18V7.64L15.36 18z"></svg:path>`,
})
export class IcRoundBrowserNotSupportedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
