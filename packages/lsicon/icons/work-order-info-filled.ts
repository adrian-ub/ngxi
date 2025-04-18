import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkOrderInfoFilledIcon],svg[lsicon-work-order-info-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v5h-1V2H4v12h3v1H3.5a.5.5 0 0 1-.5-.5zM11 5H5V4h6zM9 7H5V6h4zm1.5 2V8h1v1H13v1h-2.5c-.274 0-.5.226-.5.5s.226.5.5.5h1c.826 0 1.5.674 1.5 1.5s-.674 1.5-1.5 1.5v1h-1v-1H9v-1h2.5c.274 0 .5-.226.5-.5s-.226-.5-.5-.5h-1c-.826 0-1.5-.674-1.5-1.5S9.674 9 10.5 9M7 12H5v-1h2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWorkOrderInfoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
