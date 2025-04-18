import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryShareIcon],svg[material-symbols-light-battery-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.696 21q-.352 0-.581-.232q-.23-.233-.23-.576V5.288q0-.343.232-.575t.575-.232h1.616V3h3.384v1.48h1.62q.344 0 .574.233q.23.232.23.576v2.653h-1v-2.48H8.885V20h6.23v-1.942h1v2.134q0 .343-.232.576t-.575.232zm1.958-4.5v-2.384q0-.667.474-1.141q.475-.475 1.141-.475h4.714l-2.075-2.1l.708-.688L18.904 13l-3.288 3.288l-.714-.713l2.1-2.075h-4.733q-.269 0-.442.173t-.173.443V16.5z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
