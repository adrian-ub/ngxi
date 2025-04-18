import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconRotationRightOutlineIcon],svg[lsicon-rotation-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M8.9 3.969H6.5a4 4 0 0 0-4 4v.06m6.4-4.06L7.4 2.375M8.9 3.97L7.4 5.562m6.1 1.965h-8v6h8z"></svg:path>`,
})
export class LsiconRotationRightOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
