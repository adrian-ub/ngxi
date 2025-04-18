import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBabyAppIcon],svg[icon-park-baby-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M43 26V32C43 33.1046 42.1046 34 41 34H7C5.89543 34 5 33.1046 5 32V12C5 10.8954 5.89543 10 7 10H16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 40L44 40"></svg:path><svg:circle cx="30" cy="17" r="9" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 18V16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M41 18V16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 8C29.8333 7 28.8 4.8 26 4"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 8C30.0833 7 30.6 4.8 32 4"></svg:path><svg:circle cx="33" cy="16" r="2" fill="#fff"></svg:circle><svg:circle cx="27" cy="16" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkBabyAppIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
