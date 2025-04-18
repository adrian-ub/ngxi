import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCarryOnBagOutlineIcon],svg[material-symbols-light-carry-on-bag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17.077q1.02 0 1.721.707t.702 1.716t-.707 1.716t-1.716.707q-.873 0-1.53-.54T12.636 20h-4.02q-.667 0-1.141-.475T7 18.386v-8.77q0-.666.475-1.14T8.615 8H14V4h-.615q-.402 0-.701-.299q-.3-.299-.3-.701H15zM9.5 19V9h-.885q-.269 0-.442.173T8 9.616v8.769q0 .269.173.442t.443.173zm1-10v10h2.156q.061-.586.43-1.024t.914-.63V9zm4.502 12.039q.642 0 1.09-.45q.447-.45.447-1.091t-.45-1.09q-.45-.446-1.091-.446t-1.09.449t-.447 1.091t.45 1.09q.45.447 1.091.447M9.5 19V9zm1-10v10z"></svg:path>`,
})
export class MaterialSymbolsLightCarryOnBagOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
