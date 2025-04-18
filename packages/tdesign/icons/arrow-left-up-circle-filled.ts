import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowLeftUpCircleFilledIcon],svg[tdesign-arrow-left-up-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.778 4.222c4.296 4.296 4.296 11.26 0 15.556s-11.26 4.296-15.556 0s-4.296-11.26 0-15.556s11.26-4.296 15.556 0m-4.95 4.95L7.581 7.58l1.59 7.247l2.122-2.12l4.243 4.242l1.414-1.414l-4.243-4.243z"></svg:path>`,
})
export class TdesignArrowLeftUpCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
