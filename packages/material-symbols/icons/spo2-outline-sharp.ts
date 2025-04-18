import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpo2OutlineSharpIcon],svg[material-symbols-spo2-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20v-6h4.5v6zm1.5-1.5H14v-3h-1.5zM17 22v-3.75h3v-.75h-3V16h4.5v3.75h-3v.75h3V22zm-8-.05q-3.075-.35-5.038-2.637T2 13.8q0-2.5 1.988-5.437T10 2q3.3 2.8 5.238 5.3T17.75 12h-2.075q-.55-1.575-1.975-3.425T10 4.65Q7.025 7.375 5.513 9.675T4 13.8q0 2.4 1.388 4.088T9 19.925zm.85-8.15"></svg:path>`,
})
export class MaterialSymbolsSpo2OutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
