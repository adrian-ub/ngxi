import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStarsIcon],svg[hugeicons-stars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12c4.5 0 9-4.5 9-9c0 4.5 4.5 9 9 9c-4.5 0-9 4.5-9 9c0-4.5-4.5-9-9-9m-1 7.5c.833 0 2.5-1.667 2.5-2.5c0 .833 1.667 2.5 2.5 2.5c-.833 0-2.5 1.667-2.5 2.5c0-.833-1.667-2.5-2.5-2.5M16 5c1 0 3-2 3-3c0 1 2 3 3 3c-1 0-3 2-3 3c0-1-2-3-3-3" color="currentColor"></svg:path>`,
})
export class HugeiconsStarsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
