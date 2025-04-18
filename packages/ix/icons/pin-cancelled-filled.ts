import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPinCancelledFilledIcon],svg[ix-pin-cancelled-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m70.827 105.173l105.386 103.68l-71.253-8.746L42.667 262.4l88.32 88.32l-66.774 66.987V448H94.08l66.987-67.2l88.533 88.533l62.293-62.293l-8.96-73.813L408.96 437.333l29.867-30.506l-338.134-332.16zm398.506 114.134l-176.64-176.64l-30.08 30.293l29.654 29.653l-50.774 50.774l118.614 115.626l49.28-49.28l29.653 29.654z"></svg:path>`,
})
export class IxPinCancelledFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
