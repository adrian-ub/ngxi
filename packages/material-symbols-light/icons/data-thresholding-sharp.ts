import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDataThresholdingSharpIcon],svg[material-symbols-light-data-thresholding-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.321 16L5 18.321V19h.562l3-3zm3.7 0l-3 3h1.24l3-3zm3.648 0l-3 3h1.24l3-3zm3.654 0l-3 3h1.24L19 16.564V16zM16.35 7.212l-3.675 3.675l-2-2L6.961 12.6l.689.688l3.025-3l2 2L17.038 7.9zM4 20V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightDataThresholdingSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
