import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconFileMoved24Icon],svg[octicon-file-moved-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3a2 2 0 0 1 2-2h9.982a2 2 0 0 1 1.414.586l4.018 4.018A2 2 0 0 1 21 7.018V21a2 2 0 0 1-2 2H4.75a.75.75 0 0 1 0-1.5H19a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.146-.336l-4.018-4.018A.5.5 0 0 0 15 2.5H5a.5.5 0 0 0-.5.5v6.25a.75.75 0 0 1-1.5 0z"></svg:path><svg:path fill="currentColor" d="M7.21 14.25H1.75a.75.75 0 0 0 0 1.5h5.46s-.008 2.249 0 3.256a.75.75 0 0 0 1.262.542l4.285-4a.75.75 0 0 0 0-1.096l-4.285-4A.75.75 0 0 0 7.21 11z"></svg:path>`,
})
export class OcticonFileMoved24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
