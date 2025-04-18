import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCheckRingRoundDuotoneLineIcon],svg[lets-icons-check-ring-round-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M12 21a9 9 0 1 0-6.364-2.636"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="m16 10l-3.598 4.318c-.655.786-.983 1.18-1.424 1.2s-.803-.343-1.527-1.067L8 13"></svg:path></svg:g>`,
})
export class LetsIconsCheckRingRoundDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
