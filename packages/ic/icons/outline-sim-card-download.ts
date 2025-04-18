import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineSimCardDownloadIcon],svg[ic-outline-sim-card-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 2v16H6V8.83L10.83 4z"></svg:path><svg:path fill="currentColor" d="m16 13l-4 4l-4-4l1.41-1.41L11 13.17V9.02L13 9v4.17l1.59-1.59z"></svg:path>`,
})
export class IcOutlineSimCardDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
