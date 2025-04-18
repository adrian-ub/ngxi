import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKeyframeRemoveIcon],svg[hugeicons-keyframe-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.71 7.782C7.765 6.594 8.294 6 9 6s1.234.594 2.29 1.782l2.601 2.922C15.297 12.285 16 13.075 16 14s-.703 1.715-2.109 3.296l-2.6 2.922C10.234 21.406 9.705 22 9 22s-1.234-.594-2.29-1.782l-2.601-2.922C2.703 15.716 2 14.926 2 14s.703-1.715 2.109-3.296zM15 5h7" color="currentColor"></svg:path>`,
})
export class HugeiconsKeyframeRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
