import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowRightDownLongFillIcon],svg[ri-arrow-right-down-long-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.636 4.222L4.222 5.636l9.606 9.607L10 19.07h9.071V10l-3.828 3.829z"></svg:path>`,
})
export class RiArrowRightDownLongFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
