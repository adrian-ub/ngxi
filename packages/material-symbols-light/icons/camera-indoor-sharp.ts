import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCameraIndoorSharpIcon],svg[material-symbols-light-camera-indoor-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20V9.5l7-5.27l7 5.27V20zm3.539-3.384h5.23v-2.077l1.846.973v-3.023l-1.846.973v-2.077H8.54z"></svg:path>`,
})
export class MaterialSymbolsLightCameraIndoorSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
