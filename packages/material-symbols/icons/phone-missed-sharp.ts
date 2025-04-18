import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPhoneMissedSharpIcon],svg[material-symbols-phone-missed-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.025 21L.4 17.475l1-1.025q2.175-2.225 4.963-3.337T12 12t5.625 1.113T22.6 16.45l1 1.025L19.975 21L16 18v-3.35q-.95-.3-1.95-.475T12 14t-2.05.175T8 14.65V18zm7.925-9.65L7 6.4V9H5V3h6v2H8.4l3.525 3.525l5.65-5.65L19 4.3z"></svg:path>`,
})
export class MaterialSymbolsPhoneMissedSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
