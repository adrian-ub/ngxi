import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleArrowShrink01Icon],svg[hugeicons-circle-arrow-shrink-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M11.115 11.115c.517-.517.431-2.715.431-2.715m-.431 2.715c-.517.517-2.715.431-2.715.431m2.715-.43L7.5 7.5m5.388 5.388c.518-.517 2.715-.431 2.715-.431m-2.715.431c-.517.518-.431 2.715-.431 2.715m.431-2.715L16.5 16.5"></svg:path></svg:g>`,
})
export class HugeiconsCircleArrowShrink01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
