import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWaterDamageOutlineIcon],svg[material-symbols-water-damage-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18h10V9.325L12 5.5L7 9.325zm-2 2v-9.15L2.2 13l-1.175-1.575L12 3l11 8.4l-1.2 1.6l-2.8-2.15V20zm7-4q.825 0 1.413-.587T14 14q0-.675-.375-1.437T12 10q-1.25 1.8-1.625 2.563T10 14q0 .825.588 1.413T12 16m0-2"></svg:path>`,
})
export class MaterialSymbolsWaterDamageOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
