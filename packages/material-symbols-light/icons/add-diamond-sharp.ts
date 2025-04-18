import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddDiamondSharpIcon],svg[material-symbols-light-add-diamond-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 15.596h1V12.5h3.077v-1H12.5V8.423h-1V11.5H8.404v1H11.5zm.506 6.081L2.34 12l9.665-9.671L21.66 12z"></svg:path>`,
})
export class MaterialSymbolsLightAddDiamondSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
