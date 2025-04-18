import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMessageAltDuotoneIcon],svg[lets-icons-message-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="16" height="12" x="4" y="6" fill="currentColor" fill-opacity=".25" rx="2"></svg:rect><svg:path fill="currentColor" d="M4 16V9.243a.15.15 0 0 1 .217-.134l6.441 3.22a3 3 0 0 0 2.684 0l6.44-3.22a.15.15 0 0 1 .218.134V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2"></svg:path>`,
})
export class LetsIconsMessageAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
