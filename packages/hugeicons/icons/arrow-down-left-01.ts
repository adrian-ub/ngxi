import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowDownLeft01Icon],svg[hugeicons-arrow-down-left-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 17L18 6M6.132 11s-.475 5.634.38 6.488c.854.855 6.488.38 6.488.38" color="currentColor"></svg:path>`,
})
export class HugeiconsArrowDownLeft01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
