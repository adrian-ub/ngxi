import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorImage16Icon],svg[fluent-color-image-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorImage162)" d="M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5z"></svg:path><svg:path fill="url(#fluentColorImage160)" d="M13.586 12.879A2.5 2.5 0 0 1 11.5 14h-7a2.5 2.5 0 0 1-2.086-1.121l4.384-4.384a1.7 1.7 0 0 1 2.404 0z"></svg:path><svg:path fill="url(#fluentColorImage161)" d="M11.5 5.502a1.002 1.002 0 1 1-2.004 0a1.002 1.002 0 0 1 2.004 0"></svg:path><svg:defs><svg:lineargradient id="fluentColorImage160" x1="6.286" x2="7.572" y1="7.997" y2="14.347" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B3E0FF"></svg:stop><svg:stop offset="1" stop-color="#8CD0FF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorImage161" x1="10.097" x2="10.829" y1="4.277" y2="6.913" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#B3E0FF"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorImage162" cx="0" cy="0" r="1" gradientTransform="matrix(20.57146 26.03575 -23.68122 18.71109 -2.714 -4.75)" gradientUnits="userSpaceOnUse"><svg:stop offset=".338" stop-color="#0FAFFF"></svg:stop><svg:stop offset=".529" stop-color="#367AF2"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorImage16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
