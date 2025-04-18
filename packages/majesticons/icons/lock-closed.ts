import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsLockClosedIcon],svg[majesticons-lock-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M12 4a3 3 0 0 0-3 3v3h6V7a3 3 0 0 0-3-3zM7 7v3H6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3h-1V7A5 5 0 0 0 7 7zm6 8a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsLockClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
