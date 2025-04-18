import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPowerPlugOffOutlineSharpIcon],svg[material-symbols-light-power-plug-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.27 20v-2.654L7 14.077V8.229h.729l.886.887H8v4.534l3.27 3.27V19h1.46v-2.08l1.137-1.137L1.823 3.739l.708-.708l18.4 18.4l-.708.708l-5.642-5.643l-.85.85V20zm6.303-5.738L16 13.688V9h-4.688L9.346 7.034V4h1v4h3.308V4h1v4H17v5.835zm-5.642-1.41"></svg:path>`,
})
export class MaterialSymbolsLightPowerPlugOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
