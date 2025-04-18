import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFlashAutoOutlineIcon],svg[material-symbols-light-flash-auto-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 15.6l4.008-5.811H7.677L9.35 4H4.385v8H7zm-1 3.246V13H3.385V3h7.288L9 8.789h3.904zM7 12H4.385zm7.567-1l3.51-9h.639l3.559 9h-.973l-1.03-2.608h-3.74L15.503 11zm2.262-3.408h3.134l-1.536-4.019h-.089z"></svg:path>`,
})
export class MaterialSymbolsLightFlashAutoOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
