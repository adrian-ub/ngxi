import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsClosedCaptionAddOutlineIcon],svg[material-symbols-closed-caption-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20H5q-.825 0-1.412-.587T3 18V6q0-.825.588-1.412T5 4h14q.825 0 1.413.588T21 6v8h-2V6H5v12h10zm4 2v-2h-2v-2h2v-2h2v2h2v2h-2v2zM7 15h3q.425 0 .713-.288T11 14v-1H9.5v.5h-2v-3h2v.5H11v-1q0-.425-.288-.712T10 9H7q-.425 0-.712.288T6 10v4q0 .425.288.713T7 15m7 0h3q.425 0 .713-.288T18 14v-1h-1.5v.5h-2v-3h2v.5H18v-1q0-.425-.288-.712T17 9h-3q-.425 0-.712.288T13 10v4q0 .425.288.713T14 15"></svg:path>`,
})
export class MaterialSymbolsClosedCaptionAddOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
