import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsClosedCaptionRoundedIcon],svg[material-symbols-closed-caption-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20q-.825 0-1.412-.587T3 18V6q0-.825.588-1.412T5 4h14q.825 0 1.413.588T21 6v12q0 .825-.587 1.413T19 20zm2-5h3q.425 0 .713-.288T11 14v-.5q0-.225-.15-.375t-.375-.15h-.45q-.225 0-.375.15t-.15.375h-2v-3h2q0 .225.15.375t.375.15h.45q.225 0 .375-.15T11 10.5V10q0-.425-.288-.712T10 9H7q-.425 0-.712.288T6 10v4q0 .425.288.713T7 15m10-6h-3q-.425 0-.712.288T13 10v4q0 .425.288.713T14 15h3q.425 0 .713-.288T18 14v-.5q0-.225-.15-.375t-.375-.15h-.45q-.225 0-.375.15t-.15.375h-2v-3h2q0 .225.15.375t.375.15h.45q.225 0 .375-.15T18 10.5V10q0-.425-.288-.712T17 9"></svg:path>`,
})
export class MaterialSymbolsClosedCaptionRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
