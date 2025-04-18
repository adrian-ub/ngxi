import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPowerPlugOutlineIcon],svg[material-symbols-light-power-plug-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.27 19h1.46v-2.08L16 13.65V9.616q0-.231-.192-.424T15.385 9h-6.77q-.23 0-.423.192T8 9.616v4.034l3.27 3.27zm-1 1v-2.654L7 14.077V9.616q0-.672.472-1.144T8.616 8h1.23l-.5.5V4h1v4h3.308V4h1v4.5l-.5-.5h1.23q.672 0 1.144.472T17 9.616v4.461l-3.27 3.27V20zM12 14"></svg:path>`,
})
export class MaterialSymbolsLightPowerPlugOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
