import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFlashOnOutlineIcon],svg[material-symbols-light-flash-on-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15.6l4.008-5.811h-3.331L14.35 4H9.385v8H12zm-1 3.246V13H8.385V3h7.288L14 8.789h3.904zM12 12H9.385z"></svg:path>`,
})
export class MaterialSymbolsLightFlashOnOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
