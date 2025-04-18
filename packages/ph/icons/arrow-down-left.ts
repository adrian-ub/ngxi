import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowDownLeftIcon],svg[ph-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M197.66 69.66L83.31 184H168a8 8 0 0 1 0 16H64a8 8 0 0 1-8-8V88a8 8 0 0 1 16 0v84.69L186.34 58.34a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhArrowDownLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
