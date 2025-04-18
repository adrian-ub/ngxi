import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCropRoundedIcon],svg[material-symbols-crop-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 22v-3H7q-.825 0-1.412-.587T5 17V7H2q-.425 0-.712-.288T1 6t.288-.712T2 5h3V2q0-.425.288-.712T6 1t.713.288T7 2v15h15q.425 0 .713.288T23 18t-.288.713T22 19h-3v3q0 .425-.288.713T18 23t-.712-.288T17 22m0-7V7H9V5h8q.825 0 1.413.588T19 7v8z"></svg:path>`,
})
export class MaterialSymbolsCropRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
