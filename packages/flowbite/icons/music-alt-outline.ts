import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteMusicAltOutlineIcon],svg[flowbite-music-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m0 0V5c2.5 0 6 2.5 4.5 7"></svg:path>`,
})
export class FlowbiteMusicAltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
