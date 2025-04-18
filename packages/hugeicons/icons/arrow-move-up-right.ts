import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowMoveUpRightIcon],svg[hugeicons-arrow-move-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4 21v-2.077c0-2 0-3.001.145-3.838c.8-4.609 4.762-8.223 9.812-8.952C14.875 6 16.807 6 19 6"></svg:path><svg:path d="M17 3c.607.59 3 2.16 3 3s-2.393 2.41-3 3"></svg:path></svg:g>`,
})
export class HugeiconsArrowMoveUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
