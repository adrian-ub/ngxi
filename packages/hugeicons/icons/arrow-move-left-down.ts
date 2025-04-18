import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowMoveLeftDownIcon],svg[hugeicons-arrow-move-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 5h1c6.6 0 9.9 0 11.95 2.12S18 12.656 18 19.48V21"></svg:path><svg:path d="M6 2c-.607.59-3 2.16-3 3s2.393 2.41 3 3m9 11c.59.607 2.16 3 3 3s2.41-2.393 3-3"></svg:path></svg:g>`,
})
export class HugeiconsArrowMoveLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
