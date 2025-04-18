import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkElectrocardiogramIcon],svg[icon-park-electrocardiogram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M11 28.1321H16.6845L21.2234 13L24.8953 35L29.4483 24.6175L32.9127 28.1321H37"></svg:path></svg:g>`,
})
export class IconParkElectrocardiogramIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
