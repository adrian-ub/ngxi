import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCameraOutdoorSharpIcon],svg[material-symbols-light-camera-outdoor-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20V9.5l7-5.27l7 5.27V11h-8.461v8H19v1zm6.923-2.384v-5.231h5.23v2.077L19 13.489v3.022l-1.846-.972v2.077z"></svg:path>`,
})
export class MaterialSymbolsLightCameraOutdoorSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
