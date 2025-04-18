import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowMoveUpLeftIcon],svg[hugeicons-arrow-move-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 21v-2.077c0-2 0-3.001-.145-3.838c-.8-4.609-4.762-8.223-9.812-8.952C9.125 6 7.193 6 5 6"></svg:path><svg:path d="M7 3c-.607.59-3 2.16-3 3s2.393 2.41 3 3"></svg:path></svg:g>`,
})
export class HugeiconsArrowMoveUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
