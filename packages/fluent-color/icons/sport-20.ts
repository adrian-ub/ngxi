import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorSport20Icon],svg[fluent-color-sport-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="8" r="6" fill="url(#fluentColorSport200)"></svg:circle><svg:circle cx="12" cy="8" r="6" fill="url(#fluentColorSport201)" fill-opacity=".8"></svg:circle><svg:path fill="url(#fluentColorSport204)" d="M14.587 2.585A2 2 0 0 0 14 4c0 .37.101.718.277 1.016l1.597-1.598q.383.325.707.708l-1.597 1.597a1.994 1.994 0 0 0 2.43-.31q.23.478.373.997c-.5.37-1.117.59-1.787.59a3 3 0 0 1-1.738-.555L12.707 8l3.874 3.874a6 6 0 0 1-.707.707L12 8.708l-3.874 3.874a6 6 0 0 1-.708-.707L11.293 8L7.418 4.126q.325-.383.708-.708L12 7.293l1.555-1.555A3 3 0 0 1 13 4c0-.67.22-1.288.59-1.787q.52.143.997.372" opacity=".6"></svg:path><svg:path fill="url(#fluentColorSport202)" d="M2 8.5A1.5 1.5 0 0 1 3.5 7H5a8 8 0 0 1 8 8v1.5a1.5 1.5 0 0 1-1.5 1.5H10a8 8 0 0 1-8-8z"></svg:path><svg:path fill="url(#fluentColorSport203)" fill-opacity=".9" d="M2 8.5A1.5 1.5 0 0 1 3.5 7H5a8 8 0 0 1 8 8v1.5a1.5 1.5 0 0 1-1.5 1.5H10a8 8 0 0 1-8-8z"></svg:path><svg:path fill="#FFC470" d="M6.146 11.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708"></svg:path><svg:defs><svg:radialgradient id="fluentColorSport200" cx="0" cy="0" r="1" gradientTransform="rotate(-90 16.933 3.317)scale(20.9675)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EB4824"></svg:stop><svg:stop offset=".978" stop-color="#FF921F"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorSport201" cx="0" cy="0" r="1" gradientTransform="matrix(5 -5 6.84028 6.84028 7.5 12.5)" gradientUnits="userSpaceOnUse"><svg:stop offset=".588" stop-color="#AA1D2D"></svg:stop><svg:stop offset=".931" stop-color="#EB4824" stop-opacity=".1"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorSport202" cx="0" cy="0" r="1" gradientTransform="matrix(8.49996 11.49997 -10.3992 7.68636 3 7.5)" gradientUnits="userSpaceOnUse"><svg:stop offset=".24" stop-color="#AE5606"></svg:stop><svg:stop offset="1" stop-color="#944600"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorSport203" cx="0" cy="0" r="1" gradientTransform="rotate(10.938 -106.193 41.882)scale(16.2778)" gradientUnits="userSpaceOnUse"><svg:stop offset=".626" stop-color="#FFA43D" stop-opacity="0"></svg:stop><svg:stop offset=".927" stop-color="#FFA43D"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorSport204" x1="16.442" x2="9.927" y1="3.745" y2="10.26" gradientUnits="userSpaceOnUse"><svg:stop offset=".713" stop-color="#8E250B"></svg:stop><svg:stop offset=".903" stop-color="#8E250B" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorSport20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
