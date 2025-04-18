import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKeyframeBottomIcon],svg[hugeicons-keyframe-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.69 5.003C11.296 4.334 11.598 4 12 4s.705.334 1.31 1.003l1.485 1.643C15.598 7.536 16 7.98 16 8.5s-.402.965-1.205 1.854l-1.486 1.644C12.705 12.666 12.403 13 12 13s-.705-.334-1.31-1.002l-1.485-1.644C8.402 9.464 8 9.02 8 8.5s.402-.965 1.205-1.854zM12 16v4m-9 0h18" color="currentColor"></svg:path>`,
})
export class HugeiconsKeyframeBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
