import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGrid3x3RoundedIcon],svg[material-symbols-grid-3x3-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16H5q-.425 0-.712-.288T4 15t.288-.712T5 14h3v-4H5q-.425 0-.712-.288T4 9t.288-.712T5 8h3V5q0-.425.288-.712T9 4t.713.288T10 5v3h4V5q0-.425.288-.712T15 4t.713.288T16 5v3h3q.425 0 .713.288T20 9t-.288.713T19 10h-3v4h3q.425 0 .713.288T20 15t-.288.713T19 16h-3v3q0 .425-.288.713T15 20t-.712-.288T14 19v-3h-4v3q0 .425-.288.713T9 20t-.712-.288T8 19zm2-2h4v-4h-4z"></svg:path>`,
})
export class MaterialSymbolsGrid3x3RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
