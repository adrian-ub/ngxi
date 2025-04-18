import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloseRoundDuotoneLineIcon],svg[lets-icons-close-round-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsCloseRoundDuotoneLine0"><svg:g fill="none" stroke-width="1.2"><svg:circle cx="12" cy="12" r="8.4" stroke="silver" stroke-opacity=".25"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="m16 8l-8 8m0-8l8 8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsCloseRoundDuotoneLine0)"></svg:path>`,
})
export class LetsIconsCloseRoundDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
