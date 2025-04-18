import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInkMarkerSharpIcon],svg[material-symbols-ink-marker-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.8 21.4l-.95-.95L3.6 22.7l-2.25-2.35l2.2-2.2l-.95-1L17.175 2.575l4.25 4.25zm4.3-9.9l-5.7 5.65l1.45 1.45l5.65-5.7z"></svg:path>`,
})
export class MaterialSymbolsInkMarkerSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
