import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkOrderAbnormalFilledIcon],svg[lsicon-work-order-abnormal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5H7v-1H4V2h8v5h1V1.5a.5.5 0 0 0-.5-.5z"></svg:path><svg:path fill="currentColor" d="M5 5h6V4H5zm0 2h4V6H5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.5 8a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m.5 3.5v-2h-1v2zm-.5.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWorkOrderAbnormalFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
