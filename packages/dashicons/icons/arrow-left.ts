import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsArrowLeftIcon],svg[dashicons-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14L7 9.97L13 6z"></svg:path>`,
})
export class DashiconsArrowLeftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
