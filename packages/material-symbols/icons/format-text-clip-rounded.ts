import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFormatTextClipRoundedIcon],svg[material-symbols-format-text-clip-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20q-.425 0-.712-.288T4 19V5q0-.425.288-.712T5 4t.713.288T6 5v14q0 .425-.288.713T5 20m14 0q-.425 0-.712-.288T18 19v-6H9q-.425 0-.712-.288T8 12t.288-.712T9 11h9V5q0-.425.288-.712T19 4t.713.288T20 5v14q0 .425-.288.713T19 20"></svg:path>`,
})
export class MaterialSymbolsFormatTextClipRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
