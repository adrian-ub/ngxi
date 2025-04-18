import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMarkunreadMailboxOutlineRoundedIcon],svg[material-symbols-markunread-mailbox-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10H4v10h16V10h-9q-.425 0-.712-.288T10 9t.288-.712T11 8h9q.825 0 1.413.588T22 10v10q0 .825-.587 1.413T20 22H4q-.825 0-1.412-.587T2 20V10q0-.825.588-1.412T4 8h2V3q0-.425.288-.712T7 2h6q.425 0 .713.288T14 3v2q0 .425-.288.713T13 6H8v7q0 .425-.288.713T7 14t-.712-.288T6 13zm-2 0v10zv4z"></svg:path>`,
})
export class MaterialSymbolsMarkunreadMailboxOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
