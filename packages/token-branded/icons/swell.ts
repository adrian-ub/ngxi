import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSwellIcon],svg[token-branded-swell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedSwell0)" d="M12 20.64a8.64 8.64 0 1 0 0-17.28a8.64 8.64 0 0 0 0 17.28"></svg:path><svg:path fill="url(#tokenBrandedSwell1)" fill-rule="evenodd" d="M12 3.72a8.28 8.28 0 1 0 0 16.56a8.28 8.28 0 0 0 0-16.56M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0" clip-rule="evenodd"></svg:path><svg:path fill="#fff" d="m17.606 13.222l-.016.016l-.022.022l-4.239 4.19c-.738.73-1.936.73-2.674 0l-1.17-1.157a.208.208 0 0 1 .086-.349q1.882-.575 3.058-1.328q2.802-1.792 4.977-1.394m-.89-3.446c1.566.488 1.383 1.628 1.404 2.077q-2.571-1.335-6.186.978q-2.693 1.725-4.514 1.422c-1.213-.202-1.486-1.668-1.54-2.058q2 1 5.359-1.149q3.13-2.003 5.478-1.27M13.33 6.427l1.1 1.087a.208.208 0 0 1-.108.355q-2.388.476-3.82 1.392q-2.454 1.57-4.182 1.46l4.336-4.294a1.907 1.907 0 0 1 2.674 0"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedSwell0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#2142CB"></svg:stop><svg:stop offset="1" stop-color="#3066ED"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedSwell1" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#7DACFF"></svg:stop><svg:stop offset="1" stop-color="#CEDEFF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedSwellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
