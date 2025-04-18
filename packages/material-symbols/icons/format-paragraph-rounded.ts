import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFormatParagraphRoundedIcon],svg[material-symbols-format-paragraph-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20q-.425 0-.712-.288T9 19v-5q-2.075 0-3.537-1.463T4 9t1.463-3.537T9 4h8q.425 0 .713.288T18 5t-.288.713T17 6h-1v13q0 .425-.288.713T15 20t-.712-.288T14 19V6h-3v13q0 .425-.288.713T10 20"></svg:path>`,
})
export class MaterialSymbolsFormatParagraphRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
