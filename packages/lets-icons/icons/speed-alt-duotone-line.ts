import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSpeedAltDuotoneLineIcon],svg[lets-icons-speed-alt-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsSpeedAltDuotoneLine0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="silver" stroke-opacity=".25" d="M6.697 17.303a7.5 7.5 0 1 1 10.606 0"></svg:path><svg:path stroke="#fff" d="m12 12l4-2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsSpeedAltDuotoneLine0)"></svg:path>`,
})
export class LetsIconsSpeedAltDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
