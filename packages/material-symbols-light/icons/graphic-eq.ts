import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGraphicEqIcon],svg[material-symbols-light-graphic-eq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 17.116V6.885h1v10.23zM11.5 21V3h1v18zM4 13.308v-2.616h1v2.616zm11.25 3.807V6.885h1v10.23zM19 13.308v-2.616h1v2.616z"></svg:path>`,
})
export class MaterialSymbolsLightGraphicEqIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
