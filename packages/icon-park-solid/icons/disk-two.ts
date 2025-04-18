import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidDiskTwoIcon],svg[icon-park-solid-disk-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="32" height="22" x="4" y="13" stroke="currentColor" stroke-width="4" rx="2"></svg:rect><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 13h10v22H4z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 19h8v10h-8"></svg:path><svg:circle cx="30" cy="21" r="2" fill="currentColor"></svg:circle><svg:circle cx="30" cy="27" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkSolidDiskTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
