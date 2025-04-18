import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFormatPaintRoundedIcon],svg[material-symbols-format-paint-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22q-.825 0-1.412-.587T9 20v-4H6q-.825 0-1.412-.587T4 14V7q0-1.65 1.175-2.825T8 3h11q.425 0 .713.288T20 4v10q0 .825-.587 1.413T18 16h-3v4q0 .825-.587 1.413T13 22zM6 10h12V5h-1v3q0 .425-.288.713T16 9t-.712-.288T15 8V5h-1v1q0 .425-.288.713T13 7t-.712-.288T12 6V5H8q-.825 0-1.412.588T6 7z"></svg:path>`,
})
export class MaterialSymbolsFormatPaintRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
