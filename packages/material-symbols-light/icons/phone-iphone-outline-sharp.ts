import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPhoneIphoneOutlineSharpIcon],svg[material-symbols-light-phone-iphone-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22V2h12v20zm1-4.461V21h10v-3.462zm5 2.5q.31 0 .54-.23t.23-.54t-.23-.54T12 18.5t-.54.23t-.23.54t.23.539t.54.23m-5-3.5h10V5.5H7zM7 4.5h10V3H7zm0 13.039V21zM7 4.5V3z"></svg:path>`,
})
export class MaterialSymbolsLightPhoneIphoneOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
