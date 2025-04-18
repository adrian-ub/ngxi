import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconGiftOutlineIcon],svg[lsicon-gift-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M8 13.5v-5m0 0c0-2.469.64-4.296.923-4.869c.923-1.868 3.23-1.401 3.23-.467c0 1.402-3.23 2.336-3.23 2.336H13.5v3h-.923M8 8.5c0-2.469-.64-4.296-.923-4.869c-.94-1.902-3.23-1.401-3.23-.467c0 1.869 3.23 2.336 3.23 2.336H2.5v3h1m9.077 0v5H3.5v-5m9.077 0H3.5"></svg:path>`,
})
export class LsiconGiftOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
