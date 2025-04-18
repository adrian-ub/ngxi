import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPaintColorColorsDesignPaintPaintingPaletteIcon],svg[streamline-interface-edit-paint-color-colors-design-paint-painting-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="8.5" cy="4" r="1"></svg:circle><svg:circle cx="4.5" cy="9.5" r=".5"></svg:circle><svg:circle cx="4.5" cy="5.5" r="1"></svg:circle><svg:path d="M9.52 12.28a1 1 0 0 0-.65-.88a2 2 0 0 1 .63-3.9h1.87a2 2 0 0 0 1.89-2.67a6.5 6.5 0 1 0-6.13 8.67a6.3 6.3 0 0 0 1.74-.24a.9.9 0 0 0 .65-.98Z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditPaintColorColorsDesignPaintPaintingPaletteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
