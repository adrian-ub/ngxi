import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPowerPlugOffOutlineIcon],svg[material-symbols-light-power-plug-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.27 20v-2.654L7 14.077V9.616q0-.433.17-.811q.168-.378.559-.576l.886.887h-.23q-.154 0-.27.134Q8 9.385 8 9.616v4.034l3.27 3.27V19h1.46v-2.08l1.137-1.137L1.823 3.739l.708-.708l18.4 18.4l-.708.708l-5.642-5.643l-.85.85V20zm6.303-5.738L16 13.688V9.616q0-.231-.192-.424T15.385 9h-4.073L9.346 7.034V4h1v4h3.308V4h1v4.5l-.5-.5h1.23q.667 0 1.142.475T17 9.615v4.22zm-5.642-1.41"></svg:path>`,
})
export class MaterialSymbolsLightPowerPlugOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
