import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsUserCicrleDuotoneIcon],svg[lets-icons-user-cicrle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" d="M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0"></svg:path><svg:circle cx="12" cy="10" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="M18.22 18.246c.06.097.041.22-.04.297A8.97 8.97 0 0 1 12 21a8.97 8.97 0 0 1-6.18-2.457a.24.24 0 0 1-.04-.297C6.942 16.318 9.291 15 12 15s5.057 1.318 6.22 3.246" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsUserCicrleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
