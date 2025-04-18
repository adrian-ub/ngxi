import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBookUploadIcon],svg[tabler-book-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12v5"></svg:path><svg:path d="M11 16H6a2 2 0 0 0-2 2m11-2l3-3l3 3m-3-3v9"></svg:path></svg:g>`,
})
export class TablerBookUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
