import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDeleteBin6FillIcon],svg[ri-delete-bin-6-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5V2h10zM9 9v8h2V9zm4 0v8h2V9z"></svg:path>`,
})
export class RiDeleteBin6FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
