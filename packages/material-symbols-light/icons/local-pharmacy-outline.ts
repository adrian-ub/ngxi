import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLocalPharmacyOutlineIcon],svg[material-symbols-light-local-pharmacy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-.846L6.039 13L4 6.846V6h12.085l1.334-3.692l1.042.388L17.274 6H20v.846L17.962 13L20 19.154V20zm7.5-3.692h1V13.5h2.808v-1H12.5V9.692h-1V12.5H8.692v1H11.5zM5.1 19h13.8l-2-6l2-6H5.1l2 6zm6.9-6"></svg:path>`,
})
export class MaterialSymbolsLightLocalPharmacyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
