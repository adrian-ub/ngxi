import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryShareSharpIcon],svg[material-symbols-light-battery-share-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.654 16.5v-4h6.329l-2.075-2.1l.708-.688L18.904 13l-3.288 3.288l-.714-.713l2.1-2.075h-5.348v3zM7.884 21V4.48h2.424V3h3.384v1.48h2.424v3.462h-1v-2.48H8.885V20h6.23v-1.942h1V21z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryShareSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
