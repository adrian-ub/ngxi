import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMilitaryTechSharpIcon],svg[material-symbols-light-military-tech-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.63 20.385l.932-2.916l-2.37-1.661h2.877l.739-2.377l-4.423-2.573V2.577h9.23v8.185l-4.423 2.669l.739 2.377h2.877l-2.37 1.661l.931 2.916L12 18.573zM12 12.38l.5-.292V3.577h-1v8.512z"></svg:path>`,
})
export class MaterialSymbolsLightMilitaryTechSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
