import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneSimCardDownloadIcon],svg[ic-twotone-sim-card-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8.83V20h12V4h-7.17zm5 .19L13 9v4h3l-4 4l-4-4h3z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H6V8.83L10.83 4H18z"></svg:path><svg:path fill="currentColor" d="m12 17l4-4h-3V9l-2 .02V13H8z"></svg:path>`,
})
export class IcTwotoneSimCardDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
