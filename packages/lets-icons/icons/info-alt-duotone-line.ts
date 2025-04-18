import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsInfoAltDuotoneLineIcon],svg[lets-icons-info-alt-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsInfoAltDuotoneLine0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M11 10.5h.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h.5m-1-7h.01"></svg:path><svg:path stroke="silver" stroke-opacity=".25" d="M13.39 19.879A8 8 0 1 0 10.61 4.12a8 8 0 0 0 2.78 15.758Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsInfoAltDuotoneLine0)"></svg:path>`,
})
export class LetsIconsInfoAltDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
