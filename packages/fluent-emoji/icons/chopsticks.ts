import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiChopsticksIcon],svg[fluent-emoji-chopsticks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#f258id0)" d="m9.844 28.714l12.3-23.57c.22-.41.65-.67 1.11-.67c.97 0 1.58 1.05 1.1 1.9l-12.98 23.19a.89.89 0 0 1-.76.44c-.66 0-1.08-.7-.77-1.29"></svg:path><svg:path fill="url(#f258id1)" d="m21.884 10.794l2.47-4.41c.49-.84-.12-1.9-1.1-1.9c-.47 0-.89.26-1.11.67l-2.45 4.7c.74.28 1.47.6 2.19.94"></svg:path><svg:path fill="url(#f258id4)" d="m21.884 10.794l2.47-4.41c.49-.84-.12-1.9-1.1-1.9c-.47 0-.89.26-1.11.67l-2.45 4.7c.74.28 1.47.6 2.19.94"></svg:path><svg:path fill="url(#f258id2)" d="m7.024 28.934l5.78-25.95c.11-.45.45-.81.9-.93c.94-.25 1.8.61 1.55 1.55l-6.54 25.75a.87.87 0 0 1-1.69-.42"></svg:path><svg:path fill="url(#f258id3)" d="m14.094 8.164l1.16-4.57c.25-.94-.61-1.8-1.55-1.55c-.45.12-.8.48-.9.93l-1.06 4.78c.79.11 1.58.25 2.35.41"></svg:path><svg:path fill="url(#f258id5)" d="m14.094 8.164l1.16-4.57c.25-.94-.61-1.8-1.55-1.55c-.45.12-.8.48-.9.93l-1.06 4.78c.79.11 1.58.25 2.35.41"></svg:path><svg:defs><svg:lineargradient id="f258id0" x1="15.094" x2="18.219" y1="16.656" y2="18.313" gradientUnits="userSpaceOnUse"><svg:stop offset=".324" stop-color="#B12A3C"></svg:stop><svg:stop offset=".609" stop-color="#D32C5D"></svg:stop><svg:stop offset=".88" stop-color="#DE254C"></svg:stop></svg:lineargradient><svg:lineargradient id="f258id1" x1="20.891" x2="23.309" y1="7.422" y2="8.786" gradientUnits="userSpaceOnUse"><svg:stop offset=".272" stop-color="#35303C"></svg:stop><svg:stop offset=".615" stop-color="#544A61"></svg:stop><svg:stop offset=".964" stop-color="#443C4F"></svg:stop></svg:lineargradient><svg:lineargradient id="f258id2" x1="9.625" x2="12.125" y1="16.007" y2="16.625" gradientUnits="userSpaceOnUse"><svg:stop offset=".324" stop-color="#B12A3C"></svg:stop><svg:stop offset=".609" stop-color="#D32C5D"></svg:stop><svg:stop offset=".88" stop-color="#DE254C"></svg:stop></svg:lineargradient><svg:lineargradient id="f258id3" x1="12.313" x2="14.891" y1="5.082" y2="5.672" gradientUnits="userSpaceOnUse"><svg:stop offset=".272" stop-color="#35303C"></svg:stop><svg:stop offset=".615" stop-color="#544A62"></svg:stop><svg:stop offset=".964" stop-color="#443C4F"></svg:stop></svg:lineargradient><svg:radialgradient id="f258id4" cx="0" cy="0" r="1" gradientTransform="rotate(95.711 9.556 13.608)scale(.78515 .92661)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#655F6C"></svg:stop><svg:stop offset="1" stop-color="#5E5865" stop-opacity="0"></svg:stop></svg:radialgradient><svg:radialgradient id="f258id5" cx="0" cy="0" r="1" gradientTransform="matrix(-.03125 .65625 -.7848 -.03737 14.734 2.797)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#605B68"></svg:stop><svg:stop offset="1" stop-color="#625D69" stop-opacity="0"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentEmojiChopsticksIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
