import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsClipboardIcon],svg[pepicons-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="pepiconsClipboard0" fill="currentColor" d="M16.086 18H3.907A1.107 1.107 0 0 1 2.8 16.893V3.607c0-.611.496-1.107 1.107-1.107H7.23v2.214H5.014v11.072h9.965V4.714h-2.215V2.5h3.322c.611 0 1.107.496 1.107 1.107v13.286c0 .611-.496 1.107-1.107 1.107Z"></svg:path></svg:defs><svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M6.675 2.5h6.643v3.875H6.675z"></svg:path><svg:use href="#pepiconsClipboard0"></svg:use><svg:path fill="currentColor" fill-rule="evenodd" d="M5.675 2.5a1 1 0 0 1 1-1h6.643a1 1 0 0 1 1 1v3.875a1 1 0 0 1-1 1H6.675a1 1 0 0 1-1-1V2.5Zm2 1v1.875h4.643V3.5H7.675Z" clip-rule="evenodd"></svg:path><svg:use href="#pepiconsClipboard0"></svg:use></svg:g>`,
})
export class PepiconsClipboardIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
