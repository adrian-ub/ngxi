import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePaintPaletteIcon],svg[streamline-paint-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4 5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0-3.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M9.52 12.28a1 1 0 0 0-.65-.88a2 2 0 0 1 .63-3.9h1.87a2 2 0 0 0 1.89-2.67a6.5 6.5 0 1 0-6.13 8.67a6.3 6.3 0 0 0 1.74-.24a.9.9 0 0 0 .65-.98"></svg:path></svg:g>`,
})
export class StreamlinePaintPaletteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
