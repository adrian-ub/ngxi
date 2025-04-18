import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBookmarkOff01Icon],svg[hugeicons-bookmark-off-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 19.943c-.062 1.033-.238 1.63-.741 1.905c-1.5.822-4.313-1.92-5.649-2.746c-.775-.479-1.162-.718-1.593-.718s-.819.239-1.594.718c-1.336.826-4.149 3.568-5.649 2.746C4 21.424 4 20.238 4 17.866v-8.51c0-2.175 0-3.718.232-4.856M20 16V9.708c0-3.634 0-5.45-1.172-6.58C17.657 2 15.771 2 12 2c-2.604 0-4.308 0-5.5.371M11 7h8.5M2 2l20 20" color="currentColor"></svg:path>`,
})
export class HugeiconsBookmarkOff01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
