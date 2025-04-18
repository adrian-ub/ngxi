import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLeftToRightListStar01Icon],svg[hugeicons-left-to-right-list-star-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5.5h9M3 12h9m-9 6.5h9m9-13h-5M17.042 8l2.916-5m0 5l-2.916-5M21 18.5h-5m1.042 2.5l2.916-5m0 5l-2.916-5" color="currentColor"></svg:path>`,
})
export class HugeiconsLeftToRightListStar01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
