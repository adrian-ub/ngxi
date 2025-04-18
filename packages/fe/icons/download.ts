import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feDownloadIcon],svg[fe-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 19h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m8-5.825l3.243-3.242l1.414 1.414L12 17.004l-5.657-5.657l1.414-1.414L11 13.175V2h2z"></svg:path>`,
})
export class FeDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
