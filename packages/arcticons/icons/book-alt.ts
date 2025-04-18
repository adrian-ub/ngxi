import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBookAltIcon],svg[arcticons-book-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.788 42.5H13.677a4.45 4.45 0 0 1-4.465-4.457V9.957A4.45 4.45 0 0 1 13.677 5.5h25.111z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.788 33.235H13.677a4.45 4.45 0 0 0-4.465 4.457"></svg:path>`,
})
export class ArcticonsBookAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
