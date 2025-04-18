import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineBrowserNotSupportedIcon],svg[ic-outline-browser-not-supported-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6v10.5l1.95 1.95c.03-.15.05-.3.05-.45V6c0-1.1-.9-2-2-2H6.5l2 2zM3.22 3.32L1.95 4.59L3 5.64V18c0 1.1.9 2 2 2h12.36l2.06 2.06l1.27-1.27zM15 18H5V7.64L15.36 18z"></svg:path>`,
})
export class IcOutlineBrowserNotSupportedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
