import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSoundDetectionGlassBreakIcon],svg[material-symbols-sound-detection-glass-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16V3h18v2.05l-7.5 8.425l-4-4zm0 5v-2l6.5-6.525l4 4L21 8.05V21z"></svg:path>`,
})
export class MaterialSymbolsSoundDetectionGlassBreakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
