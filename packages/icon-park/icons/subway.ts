import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSubwayIcon],svg[icon-park-subway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="32" height="26" x="8" y="6" stroke="#000" stroke-width="4" rx="2"></svg:rect><svg:circle cx="14" cy="27" r="2" fill="#000"></svg:circle><svg:circle cx="34" cy="27" r="2" fill="#000"></svg:circle><svg:rect width="20" height="10" x="14" y="12" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 32L40 41"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 32L8 41"></svg:path></svg:g>`,
})
export class IconParkSubwayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
