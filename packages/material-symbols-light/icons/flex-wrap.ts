import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFlexWrapIcon],svg[material-symbols-light-flex-wrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21v-7.577h4.77V21zm7.616 0v-7.577h4.769V21zm7.615 0v-7.577H22V21zm-6.616-1h2.77v-5.577h-2.77zM2 10.577V3h4.77v7.577zm7.616 0V3h4.769v7.577zm7.615 0V3H22v7.577zM3 9.577h2.77V4H3zm15.423 0H21V4h-2.577z"></svg:path>`,
})
export class MaterialSymbolsLightFlexWrapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
