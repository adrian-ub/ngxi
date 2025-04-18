import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightResetIsoSharpIcon],svg[material-symbols-light-reset-iso-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.962 14v-2h2zm0 3.814v-1.26L16.535 12h1.26zm0 2.578L20.373 12H21v.633L12.627 21h-.666zm3.225.608L21 15.187v1.24L16.446 21zM19 21l2-2v2zm.621-11.385h-1.036q-.727-2.027-2.504-3.32T12 5Q9.075 5 7.038 7.038T5 12q0 2.108 1.11 3.79Q7.222 17.474 9 18.309V15h1v5H5v-1h3.312q-1.916-1-3.114-2.851T4 12q0-1.664.626-3.118T6.34 6.34t2.542-1.714T12 4q2.706 0 4.778 1.584q2.072 1.583 2.843 4.032"></svg:path>`,
})
export class MaterialSymbolsLightResetIsoSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
