import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineColorPaletteIcon],svg[streamline-color-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.5 13a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path d="M9.5 13a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path d="M7 9a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path></svg:g>`,
})
export class StreamlineColorPaletteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
