import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowSplitIcon],svg[material-symbols-light-arrow-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12.5v-1h6.792l5.5-5.5H14V5h5v5h-1V6.708L12.208 12.5zm9 6.5v-1h3.292l-3.854-3.842l.72-.72L18 17.293V14h1v5z"></svg:path>`,
})
export class MaterialSymbolsLightArrowSplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
