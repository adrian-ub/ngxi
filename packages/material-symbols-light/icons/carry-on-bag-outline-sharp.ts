import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCarryOnBagOutlineSharpIcon],svg[material-symbols-light-carry-on-bag-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17.077q1.01 0 1.716.707t.707 1.716t-.707 1.716t-1.716.707q-.873 0-1.53-.54T12.636 20H7V8h7V4h-1.616V3H15zM9.5 19V9H8v10zm1-10v10h2.156q.061-.586.43-1.024t.914-.63V9zm4.502 12.039q.642 0 1.09-.45q.447-.45.447-1.091t-.45-1.09q-.45-.446-1.091-.446t-1.09.449t-.447 1.091t.45 1.09q.45.447 1.091.447M9.5 19V9zm1-10v10z"></svg:path>`,
})
export class MaterialSymbolsLightCarryOnBagOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
