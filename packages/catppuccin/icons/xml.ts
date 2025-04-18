import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinXmlIcon],svg[catppuccin-xml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5L1 8l3.5 3.5m7-7L15 8l-3.5 3.5M9.5 2l-3 12"></svg:path>`,
})
export class CatppuccinXmlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
