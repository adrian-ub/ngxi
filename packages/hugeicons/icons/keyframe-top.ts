import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKeyframeTopIcon],svg[hugeicons-keyframe-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.31 18.998C12.704 19.665 12.402 20 12 20s-.705-.334-1.31-1.003l-1.485-1.643C8.402 16.464 8 16.02 8 15.5s.402-.965 1.205-1.854l1.486-1.644C11.295 11.335 11.597 11 12 11s.705.334 1.31 1.002l1.485 1.644C15.598 14.536 16 14.98 16 15.5s-.402.965-1.205 1.854zM12 8V4m9 0H3" color="currentColor"></svg:path>`,
})
export class HugeiconsKeyframeTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
