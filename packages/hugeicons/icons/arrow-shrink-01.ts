import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowShrink01Icon],svg[hugeicons-arrow-shrink-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.502 10.737c.845.011 3.641.592 4.234 0c.593-.593.012-3.39 0-4.234m2.532 11c-.011-.845-.592-3.641 0-4.234c.593-.593 3.39-.012 4.234 0M21 21l-7.389-7.382m-3.24-3.243L3 3" color="currentColor"></svg:path>`,
})
export class HugeiconsArrowShrink01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
