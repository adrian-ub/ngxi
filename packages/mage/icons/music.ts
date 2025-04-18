import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMusicIcon],svg[mage-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7.97 21.5a4.03 4.03 0 1 0 0-8.06a4.03 4.03 0 0 0 0 8.06ZM12 17.47V2.5m0 0l6.39 1.82a2.3 2.3 0 0 1 1.67 2.21v.968a2.303 2.303 0 0 1-2.878 2.222L12 8.258"></svg:path>`,
})
export class MageMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
