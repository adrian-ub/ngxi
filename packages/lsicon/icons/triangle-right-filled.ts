import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconTriangleRightFilledIcon],svg[lsicon-triangle-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.773 3.554a.5.5 0 0 1 .521.042l5.5 4a.5.5 0 0 1 0 .808l-5.5 4A.5.5 0 0 1 5.5 12V4a.5.5 0 0 1 .273-.446" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTriangleRightFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
