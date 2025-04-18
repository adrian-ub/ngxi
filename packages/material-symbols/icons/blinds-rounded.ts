import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBlindsRoundedIcon],svg[material-symbols-blinds-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v14h1q.425 0 .713.288T22 20t-.288.713T21 21H3q-.425 0-.712-.288T2 20t.288-.712T3 19zM6 7h8V5H6zm0 4h8V9H6zm0 8h12v-6h-2v1.825q.35.25.55.625t.2.8q0 .725-.513 1.238T15 18t-1.237-.513t-.513-1.237q0-.425.2-.8t.55-.625V13H6zM16 7h2V5h-2zm0 4h2V9h-2z"></svg:path>`,
})
export class MaterialSymbolsBlindsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
