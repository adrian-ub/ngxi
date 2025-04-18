import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKeyframesDoubleIcon],svg[hugeicons-keyframes-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.002 4.5c.375-.333.696-.5 1.066-.5c.698 0 1.222.594 2.269 1.782l2.574 2.922C21.304 10.284 22 11.074 22 12s-.696 1.715-2.089 3.296l-2.575 2.922C16.29 19.406 15.767 20 15.069 20c-.37 0-.69-.167-1.066-.5"></svg:path><svg:path d="M6.71 5.782C7.765 4.594 8.294 4 9 4s1.234.594 2.29 1.782l2.601 2.922C15.297 10.284 16 11.074 16 12s-.703 1.715-2.109 3.296l-2.6 2.922C10.234 19.406 9.705 20 9 20s-1.234-.594-2.29-1.782l-2.601-2.922C2.703 13.716 2 12.926 2 12s.703-1.715 2.109-3.296z"></svg:path></svg:g>`,
})
export class HugeiconsKeyframesDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
