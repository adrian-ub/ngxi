import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLipstickIcon],svg[icon-park-outline-lipstick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29 24h12v20H29zM7 24h14v20H7zm3-12.545V24h8V4c-6.5 0-8 5.636-8 7.454M7 32h14"></svg:path>`,
})
export class IconParkOutlineLipstickIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
