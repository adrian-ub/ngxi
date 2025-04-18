import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowSelectorToolIcon],svg[material-symbols-light-arrow-selector-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.467 20.154l-3.336-7.185l-3.4 4.743V3.5l11.154 8.77h-5.889l3.293 7.032z"></svg:path>`,
})
export class MaterialSymbolsLightArrowSelectorToolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
