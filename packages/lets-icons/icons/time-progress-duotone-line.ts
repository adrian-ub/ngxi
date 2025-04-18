import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTimeProgressDuotoneLineIcon],svg[lets-icons-time-progress-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsTimeProgressDuotoneLine0"><svg:g fill="none" stroke-linecap="round" stroke-width="1.2"><svg:path stroke="silver" stroke-opacity=".25" d="M12 4v2"></svg:path><svg:path stroke="#fff" d="M12 12L6.059 6.066"></svg:path><svg:path stroke="silver" stroke-opacity=".25" d="M20 12h-2m-6 6v2m-6-8H4"></svg:path><svg:path stroke="#fff" d="M12 3.6a8.4 8.4 0 1 1-5.94 2.46"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsTimeProgressDuotoneLine0)"></svg:path>`,
})
export class LetsIconsTimeProgressDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
