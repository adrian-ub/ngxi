import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionBuildSharpIcon],svg[ion-build-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 209.2L32 405.58L106.65 480l197.59-198.17c46.47 17.46 105.52 12.54 143-24.78c40.44-40.32 40.35-108 16.81-156.79l-87.33 87.06l-52.32-52.13l87.33-87.06C363 24.46 294.67 24.34 254.23 64.66c-38.03 37.91-42.78 97.6-24.23 144.54"></svg:path>`,
})
export class IonBuildSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
