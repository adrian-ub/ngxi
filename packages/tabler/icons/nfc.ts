import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerNfcIcon],svg[tabler-nfc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 20a3 3 0 0 1-3-3V6l5 5"></svg:path><svg:path d="M13 4a3 3 0 0 1 3 3v11l-5-5"></svg:path><svg:path d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class TablerNfcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
