import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatAltAddDuotoneLineIcon],svg[lets-icons-chat-alt-add-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.2"><svg:path fill="currentColor" fill-opacity=".25" d="M20 12c0-3.771 0-5.657-1.172-6.828S15.771 4 12 4S6.343 4 5.172 5.172S4 8.229 4 12v6c0 .943 0 1.414.293 1.707S5.057 20 6 20h6c3.771 0 5.657 0 6.828-1.172S20 15.771 20 12Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-3-3v6"></svg:path></svg:g>`,
})
export class LetsIconsChatAltAddDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
