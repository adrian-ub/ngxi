import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowExpand01Icon],svg[hugeicons-arrow-expand-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 3.266c.844-.012 3.64-.593 4.234 0c.592.593.012 3.39 0 4.234m-.228-4.009l-7.004 7.005M3.266 16.5c-.012.845-.593 3.641 0 4.234s3.39.012 4.234 0m3.002-7.236l-7.004 7.005" color="currentColor"></svg:path>`,
})
export class HugeiconsArrowExpand01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
