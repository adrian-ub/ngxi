import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleArrowExpand02Icon],svg[hugeicons-circle-arrow-expand-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M16.063 16.063c.518-.517.432-2.715.432-2.715m-.432 2.715c-.517.518-2.715.432-2.715.432m2.715-.432L13 13M7.937 7.937c.517-.518 2.715-.432 2.715-.432m-2.715.432c-.518.517-.432 2.715-.432 2.715m.432-2.715L11 11"></svg:path></svg:g>`,
})
export class HugeiconsCircleArrowExpand02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
