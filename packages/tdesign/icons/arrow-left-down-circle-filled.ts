import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowLeftDownCircleFilledIcon],svg[tdesign-arrow-left-down-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.222 4.222c4.296-4.296 11.26-4.296 15.556 0s4.296 11.26 0 15.556s-11.26 4.296-15.556 0s-4.296-11.26 0-15.556m4.95 4.95L7.58 16.419l7.247-1.59l-2.12-2.122l4.242-4.243l-1.414-1.414l-4.243 4.243z"></svg:path>`,
})
export class TdesignArrowLeftDownCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
