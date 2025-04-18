import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTableIcon],svg[carbon-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2Zm-2 0v4H5V5Zm0 22H5v-4h22Zm0-6H5v-4h22Zm0-6H5v-4h22Z"></svg:path>`,
})
export class CarbonTableIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
