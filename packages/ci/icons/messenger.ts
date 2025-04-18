import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciMessengerIcon],svg[ci-messenger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.401 21v-3.189a8.1 8.1 0 0 1-3.31-6.479C3.09 6.738 7.09 3 12 3s8.91 3.738 8.91 8.332c.001 4.594-4 8.33-8.91 8.33a9.463 9.463 0 0 1-2.559-.349L6.403 21h-.002Zm4.66-11.931l-4.866 5.163l4.438-2.454l2.3 2.394L17.8 9.01l-4.434 2.454l-2.305-2.395Z"></svg:path>`,
})
export class CiMessengerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
