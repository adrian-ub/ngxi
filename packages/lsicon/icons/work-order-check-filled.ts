import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkOrderCheckFilledIcon],svg[lsicon-work-order-check-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5V7h-1V2H4v12h2.5v1h-3a.5.5 0 0 1-.5-.5zM11 5H5V4h6zM9 7H5V6h4zm1 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-3 2a3 3 0 1 1 5.445 1.738l1.409 1.408l-.708.708l-1.408-1.409A3 3 0 0 1 7 11" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWorkOrderCheckFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
