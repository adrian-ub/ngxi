import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInkMarkerIcon],svg[material-symbols-ink-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.8 21.4l-.95-.95L4.8 21.5q-.475.475-1.162.488T2.5 21.5q-.475-.475-.475-1.15T2.5 19.2l1.05-1.05l-.95-1L16.45 3.3q.3-.3.725-.3t.725.3l2.8 2.8q.3.3.3.725t-.3.725zm4.3-9.9l-5.7 5.65l1.45 1.45l5.65-5.7z"></svg:path>`,
})
export class MaterialSymbolsInkMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
