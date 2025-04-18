import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkOrderFilledIcon],svg[lsicon-work-order-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5zM11 5.5H5v-1h6zm0 3H5v-1h6zm-6 3h4v-1H5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWorkOrderFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
