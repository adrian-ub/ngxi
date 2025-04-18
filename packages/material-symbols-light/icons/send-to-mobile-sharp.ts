import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSendToMobileSharpIcon],svg[material-symbols-light-send-to-mobile-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 15.308l-.708-.708l2.089-2.1H12.5v-1h5.88l-2.088-2.1l.708-.708L20.308 12zM6 22V2h12v4.923h-1V5.5H7v13h10v-1.423h1V22z"></svg:path>`,
})
export class MaterialSymbolsLightSendToMobileSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
