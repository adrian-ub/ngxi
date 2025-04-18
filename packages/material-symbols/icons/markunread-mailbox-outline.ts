import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMarkunreadMailboxOutlineIcon],svg[material-symbols-markunread-mailbox-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14v-4H4v10h16V10H10V8h10q.825 0 1.413.588T22 10v10q0 .825-.587 1.413T20 22H4q-.825 0-1.412-.587T2 20V10q0-.825.588-1.412T4 8h2V2h8v4H8v8zm-2-4v4zv10z"></svg:path>`,
})
export class MaterialSymbolsMarkunreadMailboxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
