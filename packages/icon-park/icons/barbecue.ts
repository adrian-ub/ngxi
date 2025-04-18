import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBarbecueIcon],svg[icon-park-barbecue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="8" height="8" x="12" y="4" fill="#2F88FF" stroke-linejoin="round" rx="4"></svg:rect><svg:rect width="8" height="8" x="12" y="22" fill="#2F88FF" stroke-linejoin="round" rx="4"></svg:rect><svg:line x1="16" x2="16" y1="31" y2="44"></svg:line><svg:rect width="8" height="8" x="28" y="4" fill="#2F88FF" stroke-linejoin="round" rx="4"></svg:rect><svg:rect width="8" height="8" x="28" y="22" fill="#2F88FF" stroke-linejoin="round" rx="4"></svg:rect><svg:line x1="32" x2="32" y1="31" y2="44"></svg:line><svg:path stroke-linejoin="round" stroke-miterlimit="2" d="M13 17H19"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="2" d="M29 17H35"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="2" d="M13 36H19"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="2" d="M29 36H35"></svg:path><svg:line x1="16" x2="16" y1="14" y2="20"></svg:line><svg:line x1="32" x2="32" y1="14" y2="20"></svg:line></svg:g>`,
})
export class IconParkBarbecueIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
