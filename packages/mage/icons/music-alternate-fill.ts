import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMusicAlternateFillIcon],svg[mage-music-alternate-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.984 4.345v12.12a4 4 0 1 1-1.5-3.13v-4l-10.47 1.9v6.3a4 4 0 1 1-4-4a4 4 0 0 1 2.52.9v-7.41a2.93 2.93 0 0 1 .66-1.9a3 3 0 0 1 1.74-1l8.9-1.63a1.83 1.83 0 0 1 2 1.05c.111.251.163.525.15.8"></svg:path>`,
})
export class MageMusicAlternateFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
