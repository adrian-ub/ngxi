import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFamilyHomeOutlineIcon],svg[material-symbols-light-family-home-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 4.27l9.577 7.172l-.623.793L19 10.769V20H5v-9.23l-1.954 1.465l-.623-.793zm-3.496 8.198q0 1.003 1.079 2.138T12 16.962q1.377-1.221 2.456-2.355t1.079-2.134q0-.83-.57-1.383q-.57-.551-1.368-.551q-.493 0-.896.204q-.403.205-.701.515q-.26-.31-.678-.515q-.418-.204-.875-.204q-.8 0-1.372.548q-.571.549-.571 1.381M18 19v-9l-6-4.5L6 10v9zm0 0H6z"></svg:path>`,
})
export class MaterialSymbolsLightFamilyHomeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
