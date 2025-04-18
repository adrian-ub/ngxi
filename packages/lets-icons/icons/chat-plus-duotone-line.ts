import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatPlusDuotoneLineIcon],svg[lets-icons-chat-plus-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsChatPlusDuotoneLine0"><svg:g fill="none" stroke-width="1.2"><svg:path stroke="#fff" d="M12 4C8.229 4 6.343 4 5.172 5.172S4 8.229 4 12v6c0 .943 0 1.414.293 1.707S5.057 20 6 20h6c3.771 0 5.657 0 6.828-1.172S20 15.771 20 12"></svg:path><svg:path stroke="silver" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".25" d="M9 10h6m-6 4h3"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M19 8V2m-3 3h6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsChatPlusDuotoneLine0)"></svg:path>`,
})
export class LetsIconsChatPlusDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
