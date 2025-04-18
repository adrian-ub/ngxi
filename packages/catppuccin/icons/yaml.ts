import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinYamlIcon],svg[catppuccin-yaml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#ed8796" stroke-linecap="round" stroke-linejoin="round" d="M2.5 1.5h3l3 4l3-4h3l-9 13h-3L7 8z"></svg:path>`,
})
export class CatppuccinYamlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
