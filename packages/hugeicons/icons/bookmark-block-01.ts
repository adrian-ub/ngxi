import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBookmarkBlock01Icon],svg[hugeicons-bookmark-block-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m14.167 7.833l4.666-4.666M20 5.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path d="M19 11.5v6.48c0 2.307 0 3.46-.773 3.872c-1.497.8-4.304-1.867-5.637-2.67c-.773-.465-1.16-.698-1.59-.698s-.817.233-1.59.698c-1.333.803-4.14 3.47-5.637 2.67C3 21.44 3 20.287 3 17.981V9.708c0-3.634 0-5.45 1.172-6.58C5.29 2.052 7.06 2.003 10.5 2m-7 5H10"></svg:path></svg:g>`,
})
export class HugeiconsBookmarkBlock01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
