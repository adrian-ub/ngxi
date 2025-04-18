import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKeyframeLeftIcon],svg[hugeicons-keyframe-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.998 10.69c.668.605 1.002.907 1.002 1.31s-.334.705-1.003 1.31l-1.643 1.485C16.464 15.598 16.02 16 15.5 16s-.965-.402-1.854-1.205l-1.644-1.486C11.335 12.705 11 12.403 11 12s.334-.705 1.002-1.31l1.644-1.485C14.536 8.402 14.98 8 15.5 8s.965.402 1.854 1.205zM8 12H4m0-9v18" color="currentColor"></svg:path>`,
})
export class HugeiconsKeyframeLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
