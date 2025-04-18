import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMessageSquareEditIcon],svg[bx-message-square-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6m4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4z"></svg:path><svg:path fill="currentColor" d="M7 14.987v1.999h1.999l5.529-5.522l-1.998-1.998zm8.47-4.465l-1.998-2L14.995 7l2 1.999z"></svg:path>`,
})
export class BxMessageSquareEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
