import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorRibbon20Icon],svg[fluent-color-ribbon-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorRibbon200)" d="M10 12.755a6.97 6.97 0 0 0 4-1.255v6a.5.5 0 0 1-.79.407L10 16l-3.21 1.907A.5.5 0 0 1 6 17.5v-6a6.97 6.97 0 0 0 4 1.255"></svg:path><svg:path fill="url(#fluentColorRibbon201)" d="M16 8A6 6 0 1 1 4 8a6 6 0 0 1 12 0"></svg:path><svg:defs><svg:radialgradient id="fluentColorRibbon200" cx="0" cy="0" r="1" gradientTransform="matrix(0 10.2442 -17.6591 0 10 10.486)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#163697"></svg:stop><svg:stop offset="1" stop-color="#29C3FF"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorRibbon201" cx="0" cy="0" r="1" gradientTransform="rotate(56.615 26.168 -40.357)scale(66.981 57.3661)" gradientUnits="userSpaceOnUse"><svg:stop offset=".772" stop-color="#FFCD0F"></svg:stop><svg:stop offset=".991" stop-color="#E67505"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorRibbon20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
