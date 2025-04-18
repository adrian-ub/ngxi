import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBatteryStorageIcon],svg[icon-park-outline-battery-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="36" height="20" x="14" y="44" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2" transform="rotate(-90 14 44)"></svg:rect><svg:path fill="currentColor" d="M20 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m25 18l-5 10l8-2l-5 10"></svg:path></svg:g>`,
})
export class IconParkOutlineBatteryStorageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
