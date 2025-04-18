import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightExposureNeg1Icon],svg[material-symbols-light-exposure-neg-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 13.385h-6v-1h6zm6.827 4.577V7.473l-2.53 1.766l-.574-.827l3.37-2.373h.791v11.923z"></svg:path>`,
})
export class MaterialSymbolsLightExposureNeg1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
