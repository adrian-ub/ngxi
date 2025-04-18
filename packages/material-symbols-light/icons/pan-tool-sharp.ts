import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPanToolSharpIcon],svg[material-symbols-light-pan-tool-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.59 21.5L2.72 11.433l.936-.92L8 13.538v-8.98h1V11.5h2.673V2.558h1V11.5h2.673V3.558h1V11.5H19V5h1v16.5z"></svg:path>`,
})
export class MaterialSymbolsLightPanToolSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
