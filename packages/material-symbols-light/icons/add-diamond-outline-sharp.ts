import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddDiamondOutlineSharpIcon],svg[material-symbols-light-add-diamond-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 15.616h1V12.5h3.116v-1H12.5V8.385h-1V11.5H8.385v1H11.5zm.506 6.061L2.34 12l9.665-9.671L21.66 12zM12 20.269L20.264 12L12 3.73L3.737 12zM12 12"></svg:path>`,
})
export class MaterialSymbolsLightAddDiamondOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
