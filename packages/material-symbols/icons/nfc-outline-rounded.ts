import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNfcOutlineRoundedIcon],svg[material-symbols-nfc-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17q.425 0 .713-.288T17 16V8q0-.425-.288-.712T16 7h-3q-.825 0-1.412.588T11 9v1.3q-.5.275-.75.7T10 12q0 .825.588 1.413T12 14t1.413-.587T14 12q0-.575-.275-1T13 10.3V9h2v6H9V9q.425 0 .713-.288T10 8t-.288-.712T9 7H8q-.425 0-.712.288T7 8v8q0 .425.288.713T8 17zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z"></svg:path>`,
})
export class MaterialSymbolsNfcOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
