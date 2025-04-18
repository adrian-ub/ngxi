import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowMoveRightDownIcon],svg[hugeicons-arrow-move-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 5h-.933c-6.16 0-9.24 0-11.153 2.12S6 12.656 6 19.48V21"></svg:path><svg:path d="M18 2c.607.59 3 2.16 3 3s-2.393 2.41-3 3M9 19c-.59.607-2.16 3-3 3s-2.41-2.393-3-3"></svg:path></svg:g>`,
})
export class HugeiconsArrowMoveRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
