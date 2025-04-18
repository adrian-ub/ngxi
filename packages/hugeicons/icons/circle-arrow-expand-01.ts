import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleArrowExpand01Icon],svg[hugeicons-circle-arrow-expand-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M7.937 16.063c-.518-.517-.432-2.715-.432-2.715m.432 2.715c.517.518 2.715.432 2.715.432m-2.715-.432L11 13m5.063-5.063c-.517-.518-2.715-.432-2.715-.432m2.715.432c.518.517.432 2.715.432 2.715m-.432-2.715L13 11"></svg:path></svg:g>`,
})
export class HugeiconsCircleArrowExpand01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
