import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatShapesIcon],svg[material-symbols-light-format-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.385 21.616v-4.232H4V6.616H2.385V2.385h4.23V4h10.77V2.385h4.23v4.23H20v10.77h1.616v4.23h-4.232V20H6.616v1.616zM6.615 19h10.77v-1.616H19V6.616h-1.616V5H6.616v1.616H5v10.769h1.616zm1.55-3l3.516-9h.638l3.554 9H14.9l-1.03-2.608h-3.728L9.112 16zm2.274-3.408h3.123L12.03 8.573h-.1z"></svg:path>`,
})
export class MaterialSymbolsLightFormatShapesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
