import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSoundDetectionGlassBreakOutlineIcon],svg[material-symbols-sound-detection-glass-break-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18zM5 5v9l4.5-4.525l4 4L19 7.3V5zm0 14h14v-8.7l-5.5 6.175l-4-4L5 17z"></svg:path>`,
})
export class MaterialSymbolsSoundDetectionGlassBreakOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
