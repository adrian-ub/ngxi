import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBookDownloadIcon],svg[tabler-book-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12v5"></svg:path><svg:path d="M13 16H6a2 2 0 0 0-2 2m11 1l3 3l3-3m-3 3v-9"></svg:path></svg:g>`,
})
export class TablerBookDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
