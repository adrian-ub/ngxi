import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloseRingDuotoneLineIcon],svg[lets-icons-close-ring-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsCloseRingDuotoneLine0"><svg:g fill="none" stroke-width="1.2"><svg:path stroke="silver" stroke-opacity=".25" d="M12 20.4a8.4 8.4 0 1 1 0-16.801A8.4 8.4 0 0 1 12 20.4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="m9 9l6 6m0-6l-6 6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsCloseRingDuotoneLine0)"></svg:path>`,
})
export class LetsIconsCloseRingDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
