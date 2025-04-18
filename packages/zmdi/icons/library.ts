import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiLibraryIcon],svg[zmdi-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 206q81-75 192-75v234q-110 0-192 76q-81-76-192-76V131q111 0 192 75m0-75q-27 0-45.5-19T128 66.5t18.5-45T192 3t45.5 18.5t18.5 45t-18.5 45.5t-45.5 19"></svg:path>`,
})
export class ZmdiLibraryIcon {
  readonly viewBox = input("0 0 384 448")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
