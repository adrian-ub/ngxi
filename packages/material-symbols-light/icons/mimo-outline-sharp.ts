import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMimoOutlineSharpIcon],svg[material-symbols-light-mimo-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.192 20v-1.538l.77-.77H3V4h18v13.692h-4.962l.77.77V20zM4 16.692h16V5H4zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsLightMimoOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
