import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKeyframeRightIcon],svg[hugeicons-keyframe-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.003 13.31C4.334 12.704 4 12.402 4 12s.334-.705 1.003-1.31l1.643-1.485C7.536 8.402 7.98 8 8.5 8s.965.402 1.854 1.205l1.644 1.486C12.666 11.295 13 11.597 13 12s-.334.705-1.002 1.31l-1.644 1.485C9.464 15.598 9.02 16 8.5 16s-.965-.402-1.854-1.205zM16 12h4m0 9V3" color="currentColor"></svg:path>`,
})
export class HugeiconsKeyframeRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
