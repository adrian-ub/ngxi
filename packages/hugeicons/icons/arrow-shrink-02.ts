import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowShrink02Icon],svg[hugeicons-arrow-shrink-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.502 13.264c.845-.012 3.641-.593 4.234 0c.593.592.012 3.389 0 4.233m2.532-11c-.012.845-.593 3.641 0 4.234s3.39.012 4.234 0M21 3l-7.389 7.382m-3.241 3.243L2.999 21" color="currentColor"></svg:path>`,
})
export class HugeiconsArrowShrink02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
