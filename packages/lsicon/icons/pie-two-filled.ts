import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPieTwoFilledIcon],svg[lsicon-pie-two-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.5 1H9a6 6 0 0 1 6 6v.5H8.5zM7.497 1v7.503h7.504l-.09.576A6.998 6.998 0 0 1 1 8.004a7 7 0 0 1 5.921-6.915zm-1 7.84V2.196a6 6 0 0 0-2.585 10.198zM4.7 13.013a6 6 0 0 0 9.106-3.51H7.252z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPieTwoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
