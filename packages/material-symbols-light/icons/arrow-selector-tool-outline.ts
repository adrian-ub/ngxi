import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowSelectorToolOutlineIcon],svg[material-symbols-light-arrow-selector-tool-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.73 14.596l2.38-3.327h4.884L7.731 5.562zm5.737 5.558l-3.336-7.185l-3.4 4.743V3.5l11.154 8.77h-5.889l3.293 7.032zm-3.357-8.885"></svg:path>`,
})
export class MaterialSymbolsLightArrowSelectorToolOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
