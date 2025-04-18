import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorImage20Icon],svg[fluent-color-image-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorImage202)" d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"></svg:path><svg:path fill="url(#fluentColorImage200)" d="m16.122 16.121l-5.238-5.237a1.25 1.25 0 0 0-1.768 0L3.88 16.12A3 3 0 0 0 6 17h8a3 3 0 0 0 2.122-.879"></svg:path><svg:circle cx="12.5" cy="7.5" r="1.5" fill="url(#fluentColorImage201)"></svg:circle><svg:defs><svg:lineargradient id="fluentColorImage200" x1="8.251" x2="9.715" y1="10.518" y2="17.343" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B3E0FF"></svg:stop><svg:stop offset="1" stop-color="#8CD0FF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorImage201" x1="11.9" x2="12.996" y1="5.667" y2="9.612" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#B3E0FF"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorImage202" cx="0" cy="0" r="1" gradientTransform="rotate(51.687 3.782 -5.018)scale(38.7123 35.2114)" gradientUnits="userSpaceOnUse"><svg:stop offset=".338" stop-color="#0FAFFF"></svg:stop><svg:stop offset=".529" stop-color="#367AF2"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorImage20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
