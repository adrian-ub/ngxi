import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerNfcOffIcon],svg[tabler-nfc-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 20a3 3 0 0 1-3-3V8m5-4a3 3 0 0 1 3 3v5m0 4v2l-5-5"></svg:path><svg:path d="M8 4h9a3 3 0 0 1 3 3v9m-.873 3.116A3 3 0 0 1 17 20H7a3 3 0 0 1-3-3V7c0-.83.337-1.582.882-2.125M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerNfcOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
