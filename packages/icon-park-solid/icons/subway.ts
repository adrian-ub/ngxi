import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSubwayIcon],svg[icon-park-solid-subway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="32" height="26" x="8" y="6" stroke="currentColor" stroke-width="4" rx="2"></svg:rect><svg:circle cx="14" cy="27" r="2" fill="currentColor"></svg:circle><svg:circle cx="34" cy="27" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 12h20v10H14z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m32 32l8 9m-23-9l-9 9"></svg:path></svg:g>`,
})
export class IconParkSolidSubwayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
