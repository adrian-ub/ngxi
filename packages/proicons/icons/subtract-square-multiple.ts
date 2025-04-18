import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsSubtractSquareMultipleIcon],svg[proicons-subtract-square-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.38 10.63h6.5"></svg:path><svg:rect width="14" height="14" x="3.63" y="3.63" rx="3"></svg:rect><svg:path d="M20.63 7.63v7a6 6 0 0 1-6 6h-7"></svg:path></svg:g>`,
})
export class ProiconsSubtractSquareMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
