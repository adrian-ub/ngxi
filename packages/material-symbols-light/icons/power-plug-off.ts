import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPowerPlugOffIcon],svg[material-symbols-light-power-plug-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.27 20v-2.654L7 14.077V9.616q0-.408.17-.76t.617-.57v1.435L1.822 3.74l.708-.708l18.4 18.4l-.708.708l-5.642-5.643l-.85.85V20zm6.303-5.738L9.346 7.034V4h1v4h3.308V4h1v4.5l-.5-.5h1.23q.672 0 1.144.472T17 9.616v4.219z"></svg:path>`,
})
export class MaterialSymbolsLightPowerPlugOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
