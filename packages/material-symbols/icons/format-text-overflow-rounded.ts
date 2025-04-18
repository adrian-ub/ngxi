import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFormatTextOverflowRoundedIcon],svg[material-symbols-format-text-overflow-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20q-.425 0-.712-.288T4 19V5q0-.425.288-.712T5 4t.713.288T6 5v14q0 .425-.288.713T5 20m8-11q-.425 0-.712-.288T12 8V5q0-.425.288-.712T13 4t.713.288T14 5v3q0 .425-.288.713T13 9m4.175 5.825q-.3.3-.712.3t-.713-.3t-.3-.7t.3-.7l.425-.425H9q-.425 0-.712-.288T8 12t.288-.712T9 11h7.175l-.425-.425q-.3-.3-.3-.7t.3-.7t.713-.3t.712.3L19.3 11.3q.3.3.3.7t-.3.7zM13 20q-.425 0-.712-.288T12 19v-3q0-.425.288-.712T13 15t.713.288T14 16v3q0 .425-.288.713T13 20"></svg:path>`,
})
export class MaterialSymbolsFormatTextOverflowRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
