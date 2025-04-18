import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCameraIndoorOutlineSharpIcon],svg[material-symbols-light-camera-indoor-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.539 16.616h5.23v-2.077l1.847.973v-3.023l-1.847.973v-2.077H8.54zM5 20V9.5l7-5.27l7 5.27V20zm1-1h12v-9l-6-4.5L6 10zm6-6.75"></svg:path>`,
})
export class MaterialSymbolsLightCameraIndoorOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
