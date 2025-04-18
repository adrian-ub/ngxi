import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVrpanoOutlineSharpIcon],svg[material-symbols-light-vrpano-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17.65q1.95-.575 3.963-.862T12 16.501t4.038.287T20 17.65V6.394q-1.95.575-3.963.84Q14.026 7.5 12 7.5t-4.038-.265T4 6.395zM3.006 19V5.033q1.99.644 4.144 1.075t4.856.43t4.856-.43t4.144-1.075V19q-1.99-.644-4.144-1.053t-4.856-.409t-4.856.409T3.006 19M6.5 14.862q1.38-.143 2.75-.214t2.75-.071t2.75.071t2.75.214L14 10.654l-2.677 3.188l-2-2.4z"></svg:path>`,
})
export class MaterialSymbolsLightVrpanoOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
