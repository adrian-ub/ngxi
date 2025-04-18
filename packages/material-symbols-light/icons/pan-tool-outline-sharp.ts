import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPanToolOutlineSharpIcon],svg[material-symbols-light-pan-tool-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.59 21.5L2.72 11.433l.936-.92L8 13.538v-8.98h1v10.907l-4.411-3.081L10.12 20.5H19V5h1v16.5zm2.083-10V2.558h1V11.5zm3.673 0V3.558h1V11.5zM12.673 16"></svg:path>`,
})
export class MaterialSymbolsLightPanToolOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
