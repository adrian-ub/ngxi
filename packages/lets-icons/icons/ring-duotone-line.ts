import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsRingDuotoneLineIcon],svg[lets-icons-ring-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsRingDuotoneLine0"><svg:g fill="none" stroke-linecap="round"><svg:path stroke="silver" stroke-opacity=".25" d="M12 6.5v0c-2.057 0-3.85 1.4-4.349 3.396l-.728 2.912a4.5 4.5 0 0 1-1.874 2.66v0c-.464.309-.245 1.032.313 1.032h13.276c.558 0 .777-.723.313-1.033v0a4.5 4.5 0 0 1-1.874-2.658l-.728-2.913A4.48 4.48 0 0 0 12 6.5zm0 0V3"></svg:path><svg:path stroke="#fff" d="M9.585 18.647a2.5 2.5 0 0 0 4.83 0"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsRingDuotoneLine0)"></svg:path>`,
})
export class LetsIconsRingDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
