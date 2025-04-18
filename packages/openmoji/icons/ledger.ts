import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiLedgerIcon],svg[openmoji-ledger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FCEA2B" d="M60.1 57.08c.563 0 1.02-.458 1.02-1.022V12.034c0-.564-.457-1.022-1.02-1.022H16.178c-.563 0-1.02.458-1.02 1.022v27.129L51.22 57.08z"></svg:path><svg:path fill="#FCEA2B" d="M60.121 56.012a1 1 0 0 0 .999-.998V12.01a1 1 0 0 0-.999-.999H17.118a1 1 0 0 0-.998.999v44.001z"></svg:path><svg:path fill="#FCEA2B" d="M16.12 12.01c0-.55.447-.998.998-.998h43.003c.552 0 .999.447.999.999v43.003a1 1 0 0 1-.999.998"></svg:path><svg:path fill="#F1B31C" d="M55.134 61H12.13a1 1 0 0 1-.999-.998V16.998A1 1 0 0 1 12.13 16h43.003c.551 0 .998.447.998.999v43.003a1 1 0 0 1-.998.998"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M16.12 12.01c0-.55.447-.998.998-.998h43.003c.552 0 .999.447.999.999v43.003a1 1 0 0 1-.999.998"></svg:path><svg:path d="M55.134 61H12.13a1 1 0 0 1-.999-.998V16.998A1 1 0 0 1 12.13 16h43.003c.551 0 .998.447.998.999v43.003a1 1 0 0 1-.998.998M7 23.411h8.712M7 29.447h8.712M7 35.482h8.712m0 6.036H7m0 6.035h8.712M7 53.589h8.712"></svg:path></svg:g>`,
})
export class OpenmojiLedgerIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
