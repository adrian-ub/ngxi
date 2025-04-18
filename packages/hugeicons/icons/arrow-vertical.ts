import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowVerticalIcon],svg[hugeicons-arrow-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5c.59-.607 2.16-3 3-3s2.41 2.393 3 3M9 19c.59.607 2.16 3 3 3s2.41-2.393 3-3M12 2.231V21.77" color="currentColor"></svg:path>`,
})
export class HugeiconsArrowVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
