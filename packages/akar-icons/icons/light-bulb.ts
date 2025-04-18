import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsLightBulbIcon],svg[akar-icons-light-bulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 22h4M5 9a7 7 0 0 1 14 0a6.97 6.97 0 0 1-3 5.734l-.542 2.566a2 2 0 0 1-1.977 1.7h-2.962a2 2 0 0 1-1.977-1.7L8 14.745A6.99 6.99 0 0 1 5 9m3 6h8"></svg:path>`,
})
export class AkarIconsLightBulbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
