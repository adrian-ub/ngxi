import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowOrEdgeSharpIcon],svg[material-symbols-light-arrow-or-edge-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.827 20.02l-3.288-3.29l.688-.707l2.1 2.094v-7.27H2.231V4h1v5.846h5.096v8.252l2.094-2.075l.695.708zm8.346 0l-3.288-3.29l.688-.707l2.1 2.094v-8.27h5.096V4h1v6.846h-5.096v7.277l2.094-2.1l.694.708z"></svg:path>`,
})
export class MaterialSymbolsLightArrowOrEdgeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
