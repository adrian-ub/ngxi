import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCompassIcon],svg[openmoji-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M33.2 33.2L48 24l-9.2 14.8"></svg:path><svg:circle cx="36" cy="36" r="24" fill="#fcea2b"></svg:circle><svg:path fill="#f1b31c" d="M53 19a24.042 24.042 0 0 1-17 41a24.3 24.3 0 0 1-17-7"></svg:path><svg:path fill="#fff" d="M33.2 33.2L24 48l14.8-9.2"></svg:path><svg:path fill="#ea5a47" d="M33.2 33.2L48 24l-9.2 14.8"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="24"></svg:circle><svg:path d="M33.2 33.2L24 48l14.8-9.2"></svg:path><svg:path d="M33.2 33.2L48 24l-9.2 14.8M36 21v-5m0 40v-5m15-15h5m-40 0h5"></svg:path></svg:g>`,
})
export class OpenmojiCompassIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
