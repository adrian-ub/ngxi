import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsArrowLeftAltIcon],svg[dashicons-arrow-left-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9v2H6l4 4l-1 2l-7-7l7-7l1 2l-4 4z"></svg:path>`,
})
export class DashiconsArrowLeftAltIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
