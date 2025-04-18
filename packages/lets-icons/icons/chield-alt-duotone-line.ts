import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldAltDuotoneLineIcon],svg[lets-icons-chield-alt-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M16.8 16.4L15 17.75a5 5 0 0 1-6 0L7.2 16.4A8 8 0 0 1 4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a8 8 0 0 1-3.2 6.4Z"></svg:path><svg:circle cx="12" cy="10" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="10" r="1" fill="currentColor"></svg:circle><svg:circle cx="15" cy="10" r="1" fill="currentColor"></svg:circle>`,
})
export class LetsIconsChieldAltDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
