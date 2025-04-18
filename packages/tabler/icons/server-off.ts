import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerServerOffIcon],svg[tabler-server-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12H6a3 3 0 0 1-3-3V7c0-1.083.574-2.033 1.435-2.56M8 4h10a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2m0 0h2a3 3 0 0 1 3 3v2m-1.448 2.568A3 3 0 0 1 18 20H6a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h6M7 8v.01M7 16v.01M3 3l18 18"></svg:path>`,
})
export class TablerServerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
