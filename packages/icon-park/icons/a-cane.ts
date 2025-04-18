import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkACaneIcon],svg[icon-park-a-cane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19.5576 44.7684C19.5576 44.7684 32.468 20.4873 33.6417 18.28C34.8154 16.0726 37.4535 8.98102 30.3899 5.22524C23.3263 1.46947 19.1571 7.18063 17.7486 9.82948"></svg:path>`,
})
export class IconParkACaneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
