import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSkippingRopeIcon],svg[hugeicons-skipping-rope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.994 5.517c0 1.931 1.794 3.497 4.006 3.497s4.006-1.566 4.006-3.497S14.213 2.021 12 2.021S7.994 3.586 7.994 5.517M4.51 12c-.846.018-1.645.208-1.914.431c-.308.466.393 1.505.5 1.942l-.352 2.862l-.24 2.513c-.145 2.669 3.873 3.323 3.988 0l-.612-5.32c.266-.798.91-1.852.439-2.098c-.485-.254-1.16-.343-1.808-.33m0 0c-.047-1.197-.116-3.7.274-4.492"></svg:path><svg:path d="M19.49 12c.846.018 1.646.208 1.914.431c.308.466-.393 1.504-.5 1.941l.352 2.863l.24 2.513c.145 2.669-3.873 3.323-3.988 0l.613-5.32c-.267-.798-.91-1.852-.44-2.098c.485-.254 1.16-.343 1.808-.33m0 0c.039-.986.098-2.728-.105-3.86a8 8 0 0 0-.35-1.26C17.528 2.608 10.81-.614 6.01 4.99"></svg:path></svg:g>`,
})
export class HugeiconsSkippingRopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
