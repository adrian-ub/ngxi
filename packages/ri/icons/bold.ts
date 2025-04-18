import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBoldIcon],svg[ri-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 11h4.5a2.5 2.5 0 0 0 0-5H8zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.5 4.5 0 0 1 18 15.5M8 13v5h5.5a2.5 2.5 0 0 0 0-5z"></svg:path>`,
})
export class RiBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
