import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowRightUpFillIcon],svg[ri-arrow-right-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.05 12.361l-5.656 5.657l-1.414-1.414l5.657-5.657l-4.95-4.95H18v11.314z"></svg:path>`,
})
export class RiArrowRightUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
