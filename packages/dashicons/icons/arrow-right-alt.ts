import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsArrowRightAltIcon],svg[dashicons-arrow-right-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11V9h12l-4-4l1-2l7 7l-7 7l-1-2l4-4z"></svg:path>`,
})
export class DashiconsArrowRightAltIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
