import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMilitaryTechIcon],svg[material-symbols-light-military-tech-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.385 2.577h9.23v7.08q0 .537-.288.997t-.777.754l-3.358 2.023l.739 2.377h2.877l-2.37 1.661l.931 2.916L12 18.573l-2.37 1.812l.931-2.916l-2.369-1.661h2.877l.739-2.377l-3.397-1.985q-.488-.275-.757-.754q-.27-.479-.27-1.034zm4.115 1v8.512l.5.292l.5-.293v-8.51z"></svg:path>`,
})
export class MaterialSymbolsLightMilitaryTechIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
