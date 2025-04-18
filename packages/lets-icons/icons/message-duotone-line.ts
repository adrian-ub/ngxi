import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMessageDuotoneLineIcon],svg[lets-icons-message-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.2"><svg:rect width="16" height="12" x="4" y="6" rx="2"></svg:rect><svg:path d="m4 9l7.106 3.553a2 2 0 0 0 1.788 0L20 9"></svg:path><svg:path fill="currentColor" fill-opacity=".25" d="m11.374 12.016l-6.08-3.04a1.254 1.254 0 0 1 .56-2.376h12.292a1.254 1.254 0 0 1 .56 2.376l-6.08 3.04a1.4 1.4 0 0 1-1.252 0Z"></svg:path></svg:g>`,
})
export class LetsIconsMessageDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
