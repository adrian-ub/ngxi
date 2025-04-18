import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowDownLeftThinIcon],svg[ph-arrow-down-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M194.83 66.83L73.66 188H168a4 4 0 0 1 0 8H64a4 4 0 0 1-4-4V88a4 4 0 0 1 8 0v94.34L189.17 61.17a4 4 0 1 1 5.66 5.66"></svg:path>`,
})
export class PhArrowDownLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
