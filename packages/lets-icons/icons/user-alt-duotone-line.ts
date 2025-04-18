import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsUserAltDuotoneLineIcon],svg[lets-icons-user-alt-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsUserAltDuotoneLine0"><svg:g fill="none" stroke-linecap="round"><svg:circle cx="12" cy="8" r="3.5" stroke="#fff"></svg:circle><svg:path stroke="silver" stroke-opacity=".25" d="M4.85 16.948c.639-2.345 3.065-3.448 5.495-3.448h3.31c2.43 0 4.856 1.103 5.496 3.448a10 10 0 0 1 .295 1.553c.06.55-.394.999-.946.999h-13c-.552 0-1.005-.45-.946-.998a10 10 0 0 1 .295-1.554Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsUserAltDuotoneLine0)"></svg:path>`,
})
export class LetsIconsUserAltDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
