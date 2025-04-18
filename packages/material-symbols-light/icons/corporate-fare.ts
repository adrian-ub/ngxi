import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCorporateFareIcon],svg[material-symbols-light-corporate-fare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.73 20.154v-17h9v4h9.54v13zm1-1h7v-3h-7zm0-4h7v-3h-7zm0-4h7v-3h-7zm0-4h7v-3h-7zm8 12h8.54v-11h-8.54zm2.386-7v-1H17.5v1zm0 4v-1H17.5v1z"></svg:path>`,
})
export class MaterialSymbolsLightCorporateFareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
