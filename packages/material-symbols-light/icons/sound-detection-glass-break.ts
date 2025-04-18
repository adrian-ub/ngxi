import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSoundDetectionGlassBreakIcon],svg[material-symbols-light-sound-detection-glass-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15.712V4h16v2.935l-6.48 7.27l-4.02-4.018zM4 20v-2.712l5.5-5.525l3.98 3.981L20 8.434V20z"></svg:path>`,
})
export class MaterialSymbolsLightSoundDetectionGlassBreakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
