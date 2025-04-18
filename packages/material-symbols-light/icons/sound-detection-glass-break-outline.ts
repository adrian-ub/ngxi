import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSoundDetectionGlassBreakOutlineIcon],svg[material-symbols-light-sound-detection-glass-break-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zM5 5v9.712l4.5-4.525l4.02 4.019L19 8.05V5zm0 14h14V9.55l-5.52 6.194l-3.98-3.98L5 16.289z"></svg:path>`,
})
export class MaterialSymbolsLightSoundDetectionGlassBreakOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
