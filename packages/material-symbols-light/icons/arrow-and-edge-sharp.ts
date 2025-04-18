import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowAndEdgeSharpIcon],svg[material-symbols-light-arrow-and-edge-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 20.02l-3.289-3.29l.689-.707l2.1 2.094v-5.04q0-.921-.655-1.576t-1.576-.655H2.231V4h1v5.846h6.038q.881 0 1.598.42T12 11.39q.416-.702 1.133-1.123q.717-.42 1.598-.42h6.038V4h1v6.846h-7.038q-.921 0-1.576.655t-.655 1.576v5.021l2.094-2.075l.695.708z"></svg:path>`,
})
export class MaterialSymbolsLightArrowAndEdgeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
