import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siArrowDownwardCircleFillIcon],svg[si-arrow-downward-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m14.707.707l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V8a1 1 0 1 1 2 0v5.586l2.293-2.293a1 1 0 0 1 1.414 1.414" clip-rule="evenodd"></svg:path>`,
})
export class SiArrowDownwardCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
