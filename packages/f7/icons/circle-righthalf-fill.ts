import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7CircleRighthalfFillIcon],svg[f7-circle-righthalf-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.012 51.273c12.726 0 23.273-10.546 23.273-23.273c0-12.703-10.57-23.273-23.297-23.273S4.715 15.297 4.715 28c0 12.727 10.57 23.273 23.297 23.273m0-3.96A19.255 19.255 0 0 1 8.699 28A19.23 19.23 0 0 1 27.99 8.71Z"></svg:path>`,
})
export class F7CircleRighthalfFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
