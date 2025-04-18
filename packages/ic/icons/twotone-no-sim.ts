import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneNoSimIcon],svg[ic-twotone-no-sim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 19h9.23L7 9.77z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M3.79 3.74L2.38 5.15l2.74 2.74l-.12.12V19c0 1.1.9 2 2 2h10c.35 0 .68-.1.97-.26l1.88 1.88l1.41-1.41zM7 19V9.77L16.23 19z"></svg:path><svg:path fill="currentColor" d="M10.84 5L9.36 6.47L17 14.11V5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M10.84 5H17v9.11l2 2V5c0-1.1-.9-2-2-2h-6.99L7.95 5.06l1.41 1.41z"></svg:path>`,
})
export class IcTwotoneNoSimIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
