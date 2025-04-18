import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMoonFillIcon],svg[mage-moon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.88 15.147a10.23 10.23 0 0 1-19.63-5.64a10.28 10.28 0 0 1 6.63-7.37a1.77 1.77 0 0 1 1-.07a1.8 1.8 0 0 1 .89.45a1.81 1.81 0 0 1 .48 1.84a7 7 0 0 0-.08 4.21a6.27 6.27 0 0 0 4.3 4.31a6.9 6.9 0 0 0 4.2-.08a1.83 1.83 0 0 1 1 0a1.8 1.8 0 0 1 1.3 1.39a1.8 1.8 0 0 1-.09.96"></svg:path>`,
})
export class MageMoonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
