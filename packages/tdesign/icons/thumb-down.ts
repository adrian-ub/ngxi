import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignThumbDownIcon],svg[tdesign-thumb-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.879 22.617l1.279-.213A4 4 0 0 0 15.5 18.46V16h5.32a2 2 0 0 0 1.972-2.329l-1.666-10a2 2 0 0 0-1.973-1.67H7v11.197zm1.234-2.254L9 12.803V4h10.153l1.667 10H13.5v4.459a2 2 0 0 1-1.387 1.904M4 14V2H2v12z"></svg:path>`,
})
export class TdesignThumbDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
