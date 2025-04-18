import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSoundDetectionGlassBreakSharpIcon],svg[material-symbols-sound-detection-glass-break-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18Zm2-7l4.5-4.525l4 4L19 7.3V5H5Zm0 5h14v-8.7l-5.5 6.175l-4-4L5 17Z"></svg:path>`,
})
export class MaterialSymbolsSoundDetectionGlassBreakSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
