import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKeyframesDoubleRemoveIcon],svg[hugeicons-keyframes-double-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.002 4.5c.375-.333.696-.5 1.066-.5c.698 0 1.222.594 2.269 1.782l2.574 2.922C21.304 10.284 22 11.074 22 12s-.696 1.715-2.089 3.296l-2.575 2.922C16.29 19.406 15.767 20 15.069 20c-.37 0-.69-.167-1.066-.5"></svg:path><svg:path d="M7 5.44C7.862 4.48 8.354 4 8.989 4c.706 0 1.235.594 2.294 1.782l2.605 2.922C15.295 10.284 16 11.074 16 12s-.704 1.715-2.112 3.296l-2.605 2.922C10.224 19.406 9.695 20 8.99 20c-.635 0-1.127-.48-1.989-1.44M2 12h7"></svg:path></svg:g>`,
})
export class HugeiconsKeyframesDoubleRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
