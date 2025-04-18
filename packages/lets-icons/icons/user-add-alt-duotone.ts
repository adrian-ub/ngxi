import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsUserAddAltDuotoneIcon],svg[lets-icons-user-add-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="10" cy="10" r="4" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M16.221 18.246a.24.24 0 0 1-.041.297A8.97 8.97 0 0 1 10 21a8.97 8.97 0 0 1-6.18-2.457a.24.24 0 0 1-.04-.297C4.942 16.318 7.291 15 10 15s5.057 1.318 6.221 3.246" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M18.5 10.5v6m-3-3h6"></svg:path></svg:g>`,
})
export class LetsIconsUserAddAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
