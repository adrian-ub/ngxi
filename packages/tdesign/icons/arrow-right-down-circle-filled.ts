import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowRightDownCircleFilledIcon],svg[tdesign-arrow-right-down-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.222 19.778c-4.296-4.296-4.296-11.26 0-15.556s11.26-4.296 15.556 0s4.296 11.26 0 15.556s-11.26 4.296-15.556 0m4.95-4.95l7.247 1.591l-1.59-7.247l-2.122 2.12L8.464 7.05L7.05 8.464l4.243 4.243z"></svg:path>`,
})
export class TdesignArrowRightDownCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
