import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVillaRoundedIcon],svg[material-symbols-light-villa-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20v-5.384q0-.667.475-1.141t1.14-.475h5.308q0-.633.452-1.086q.451-.452 1.085-.452t1.087.452T20 13v7h-4.23v-2.538q0-.31-.222-.54q-.221-.23-.548-.23q-.31 0-.54.23t-.23.54V20zm-6 0V9.798q0-.503.281-.916q.282-.412.744-.593l9.106-3.495q.404-.161.752.082q.348.244.348.67V12h-3.808q-1.01 0-1.716.707T9 14.423V20z"></svg:path>`,
})
export class MaterialSymbolsLightVillaRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
