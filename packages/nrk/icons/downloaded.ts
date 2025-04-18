import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkDownloadedIcon],svg[nrk-downloaded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 0h16v2H6v20h12v-8.5l2-2V24H4z"></svg:path><svg:path fill-rule="evenodd" d="m22.21 5.7l-8.26 8.27L10 9.4l1.51-1.3l2.55 2.93L20.8 4.3l1.41 1.42Z" clip-rule="evenodd"></svg:path><svg:path d="M13.5 19a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path></svg:g>`,
})
export class NrkDownloadedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
