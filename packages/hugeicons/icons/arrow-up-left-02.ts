import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowUpLeft02Icon],svg[hugeicons-arrow-up-left-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11 11l7 7M8.459 6.083l1.242.113c2.012.183 3.018.274 3.254.928s-.477 1.368-1.906 2.796L9.92 11.05c-1.428 1.428-2.142 2.142-2.796 1.905s-.745-1.242-.928-3.254l-.113-1.242c-.11-1.211-.165-1.817.197-2.18c.362-.361.968-.306 2.179-.196" color="currentColor"></svg:path>`,
})
export class HugeiconsArrowUpLeft02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
