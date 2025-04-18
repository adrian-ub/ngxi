import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFileIsrIcon],svg[tabler-file-isr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="tablerFileIsr0" d="M15 3v4a1 1 0 0 0 1 1h4"></svg:path></svg:defs><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:use href="#tablerFileIsr0"></svg:use><svg:use href="#tablerFileIsr0"></svg:use><svg:path d="M6 8V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7"></svg:path><svg:path d="m3 15l3-3l3 3"></svg:path></svg:g>`,
})
export class TablerFileIsrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
