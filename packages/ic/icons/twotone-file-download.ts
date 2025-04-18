import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneFileDownloadIcon],svg[ic-twotone-file-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.17 11H13V5h-2v6H9.83L12 13.17z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 18h14v2H5zm14-9h-4V3H9v6H5l7 7zm-8 2V5h2v6h1.17L12 13.17L9.83 11z"></svg:path>`,
})
export class IcTwotoneFileDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
