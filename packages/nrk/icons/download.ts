import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkDownloadIcon],svg[nrk-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 2h-2v15.1l-7-4.4V15l8 5l8-5v-2.3l-7 4.4z"></svg:path><svg:path d="M4 22h16v2H4z" opacity=".5"></svg:path></svg:g>`,
})
export class NrkDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
