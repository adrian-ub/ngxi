import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowExpand02Icon],svg[hugeicons-arrow-expand-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.5 3.266c-.844-.012-3.64-.593-4.234 0s-.012 3.39 0 4.234m.228-4.009l7.004 7.005M20.734 16.5c.012.844.593 3.64 0 4.234s-3.39.012-4.234 0m-3.002-7.237l7.004 7.006" color="currentColor"></svg:path>`,
})
export class HugeiconsArrowExpand02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
