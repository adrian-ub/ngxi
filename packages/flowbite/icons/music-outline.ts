import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteMusicOutlineIcon],svg[flowbite-music-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 18a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 0V6.333L18 4v11.667M8 10.333L18 8m0 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class FlowbiteMusicOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
