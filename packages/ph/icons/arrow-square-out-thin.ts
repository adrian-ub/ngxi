import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareOutThinIcon],svg[ph-arrow-square-out-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 104a4 4 0 0 1-8 0V49.66l-73.16 73.17a4 4 0 0 1-5.66-5.66L206.34 44H152a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4Zm-36 28a4 4 0 0 0-4 4v72a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h72a4 4 0 0 0 0-8H48a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12v-72a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhArrowSquareOutThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
