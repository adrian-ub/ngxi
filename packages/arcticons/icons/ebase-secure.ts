import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEbaseSecureIcon],svg[arcticons-ebase-secure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.423 10.447h8.948v6.586h-8.948zM27.22 36.148c-1.11 3.242-4.403 5.757-7.976 6.253c-5.614.78-10.837-3.127-11.608-8.68l-.91-6.563c-.771-5.553 3.192-10.734 8.805-11.513s10.838 3.127 11.608 8.68l.49 3.534l-20.413 2.833m26.76-20.245V8.42a2.92 2.92 0 0 1 5.841 0v2.026"></svg:path>`,
})
export class ArcticonsEbaseSecureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
