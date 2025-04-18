import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPowerInputRoundedIcon],svg[material-symbols-power-input-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15q-.425 0-.712-.288T2 14t.288-.712T3 13h3q.425 0 .713.288T7 14t-.288.713T6 15zm7 0q-.425 0-.712-.288T9 14t.288-.712T10 13h3q.425 0 .713.288T14 14t-.288.713T13 15zm7 0q-.425 0-.712-.288T16 14t.288-.712T17 13h3q.425 0 .713.288T21 14t-.288.713T20 15zM3 11q-.425 0-.712-.288T2 10t.288-.712T3 9h17q.425 0 .713.288T21 10t-.288.713T20 11z"></svg:path>`,
})
export class MaterialSymbolsPowerInputRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
