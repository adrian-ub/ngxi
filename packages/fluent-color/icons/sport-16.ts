import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorSport16Icon],svg[fluent-color-sport-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="9.5" cy="6.5" r="5.5" fill="url(#fluentColorSport160)"></svg:circle><svg:circle cx="9.5" cy="6.5" r="5.5" fill="url(#fluentColorSport161)" fill-opacity=".8"></svg:circle><svg:path fill="url(#fluentColorSport164)" d="M6.239 2.07L9.73 5.563l.825-.824A3 3 0 0 1 10 3c0-.71.247-1.363.66-1.877a5.5 5.5 0 0 1 1.057.342a1.996 1.996 0 0 0-.44 2.551l1.743-1.743q.385.322.707.707l-1.743 1.743a1.996 1.996 0 0 0 2.55-.44q.224.505.344 1.057A3 3 0 0 1 13 6a3 3 0 0 1-1.738-.555l-.824.825l3.491 3.491q-.299.405-.665.75L9.73 6.976L6.854 9.854l-.708-.708L9.023 6.27L5.49 2.736a5.5 5.5 0 0 1 .749-.665" opacity=".6"></svg:path><svg:path fill="url(#fluentColorSport162)" d="M2.5 6A1.5 1.5 0 0 0 1 7.5v1A6.5 6.5 0 0 0 7.5 15h1a1.5 1.5 0 0 0 1.5-1.5v-1A6.5 6.5 0 0 0 3.5 6z"></svg:path><svg:path fill="url(#fluentColorSport163)" fill-opacity=".9" d="M2.5 6A1.5 1.5 0 0 0 1 7.5v1A6.5 6.5 0 0 0 7.5 15h1a1.5 1.5 0 0 0 1.5-1.5v-1A6.5 6.5 0 0 0 3.5 6z"></svg:path><svg:path fill="#FFC470" d="M5.104 9.396a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708-.708z"></svg:path><svg:defs><svg:radialgradient id="fluentColorSport160" cx="0" cy="0" r="1" gradientTransform="rotate(-90 14.355 3.374)scale(19.2202)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EB4824"></svg:stop><svg:stop offset=".978" stop-color="#FF921F"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorSport161" cx="0" cy="0" r="1" gradientTransform="matrix(4.58333 -4.58333 6.27026 6.27026 5.375 10.625)" gradientUnits="userSpaceOnUse"><svg:stop offset=".588" stop-color="#AA1D2D"></svg:stop><svg:stop offset=".931" stop-color="#EB4824" stop-opacity=".1"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorSport162" cx="0" cy="0" r="1" gradientTransform="matrix(6.95452 9.40913 -8.50845 6.2888 1.818 6.409)" gradientUnits="userSpaceOnUse"><svg:stop offset=".24" stop-color="#AE5606"></svg:stop><svg:stop offset="1" stop-color="#944600"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorSport163" cx="0" cy="0" r="1" gradientTransform="rotate(10.938 -88.628 31.08)scale(13.3182)" gradientUnits="userSpaceOnUse"><svg:stop offset=".626" stop-color="#FFA43D" stop-opacity="0"></svg:stop><svg:stop offset=".927" stop-color="#FFA43D"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorSport164" x1="13.66" x2="7.761" y1="2.51" y2="8.408" gradientUnits="userSpaceOnUse"><svg:stop offset=".713" stop-color="#8E250B"></svg:stop><svg:stop offset=".903" stop-color="#8E250B" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorSport16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
