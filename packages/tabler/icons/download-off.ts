import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDownloadOffIcon],svg[tabler-download-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 1.83-1.19M7 11l5 5l2-2m2-2l1-1m-5-7v4m0 4v4M3 3l18 18"></svg:path>`,
})
export class TablerDownloadOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
