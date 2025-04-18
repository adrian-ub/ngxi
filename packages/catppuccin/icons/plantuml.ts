import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinPlantumlIcon],svg[catppuccin-plantuml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round" d="M4.389 10.167h7.222v2.889a1.444 1.444 0 0 1-1.444 1.444H5.833a1.444 1.444 0 0 1-1.444-1.444ZM8 5.833A4.333 4.333 0 0 0 3.667 1.5H1.5v1.444a4.333 4.333 0 0 0 4.333 4.334H8m0 0a4.333 4.333 0 0 1 4.333-4.334H14.5v.723A4.333 4.333 0 0 1 10.167 8H8m0 2.167V5.833"></svg:path>`,
})
export class CatppuccinPlantumlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
