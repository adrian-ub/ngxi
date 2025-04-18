import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShadowMinusSharpIcon],svg[material-symbols-light-shadow-minus-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V7h3.616V3H21v14.385h-4V21zm4.616-4.615H20V4H7.616zM10.5 10.5v-1h7v1z"></svg:path>`,
})
export class MaterialSymbolsLightShadowMinusSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
