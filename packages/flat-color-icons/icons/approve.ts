import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsApproveIcon],svg[flat-color-icons-approve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#FFCC80"><svg:circle cx="38" cy="26" r="4"></svg:circle><svg:circle cx="10" cy="26" r="4"></svg:circle><svg:path d="M39 19c0-12.7-30-8.3-30 0v10c0 8.3 6.7 15 15 15s15-6.7 15-15z"></svg:path><svg:path d="M24 4C15.2 4 8 11.2 8 20v3.5l2.1.6V19l19.5-6.3l8.2 6.3v5.1l2.1-.6V20C40 12.5 34.6 4 24 4"></svg:path></svg:g><svg:path fill="#4CAF50" d="M32.6 18.6L22.3 28.9L17.4 24l-2.8 2.8l7.7 7.7l13.1-13.1z"></svg:path>`,
})
export class FlatColorIconsApproveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
