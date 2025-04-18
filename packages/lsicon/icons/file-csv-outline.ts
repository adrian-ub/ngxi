import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFileCsvOutlineIcon],svg[lsicon-file-csv-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M7 7.5H5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h2m3.5-4h-2A.5.5 0 0 0 8 8v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2m4-4.5c0 .5 1 4.5 1 4.5h1s1-4 1-4.5M11 13.5v1H2v-13h6m0 0v3h3m-3-3h.5L11 4v.5m0 0V6"></svg:path>`,
})
export class LsiconFileCsvOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
