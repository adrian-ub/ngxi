import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBarbecueIcon],svg[icon-park-outline-barbecue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:rect width="8" height="8" x="12" y="4" stroke-linejoin="round" rx="4"></svg:rect><svg:rect width="8" height="8" x="12" y="22" stroke-linejoin="round" rx="4"></svg:rect><svg:path d="M16 31v13"></svg:path><svg:rect width="8" height="8" x="28" y="4" stroke-linejoin="round" rx="4"></svg:rect><svg:rect width="8" height="8" x="28" y="22" stroke-linejoin="round" rx="4"></svg:rect><svg:path d="M32 31v13"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="2" d="M13 17h6m10 0h6M13 36h6m10 0h6"></svg:path><svg:path d="M16 14v6m16-6v6"></svg:path></svg:g>`,
})
export class IconParkOutlineBarbecueIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
