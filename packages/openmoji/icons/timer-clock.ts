import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiTimerClockIcon],svg[openmoji-timer-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiTimerClock0" fill="none" stroke="#000" d="M12.605 57.683v-23c0-12.703 10.297-23 23-23s23 10.297 23 23v23z"></svg:path></svg:defs><svg:g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><svg:path fill="#9b9b9a" d="M12.605 57.683v-23c0-12.703 10.297-23 23-23s23 10.297 23 23v23z"></svg:path><svg:circle cx="35.605" cy="34.682" r="15" fill="#d0cfce"></svg:circle><svg:circle cx="35.605" cy="34.682" r="15" fill="#FFF"></svg:circle><svg:path fill="#FFF" d="M35.417 35.087h-6.812"></svg:path></svg:g><svg:use href="#openmojiTimerClock0" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:use><svg:circle cx="35.605" cy="34.682" r="15" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:circle cx="35.605" cy="34.682" r="15" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:use href="#openmojiTimerClock0" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:use><svg:circle cx="35.605" cy="34.682" r="15" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.758" d="M35.417 35.087h-6.812"></svg:path><svg:circle cx="24.407" cy="34.988" r="1"></svg:circle><svg:circle cx="46.678" cy="34.988" r="1"></svg:circle><svg:circle cx="27.668" cy="42.862" r="1" transform="rotate(-45.001 27.668 42.862)"></svg:circle><svg:circle cx="43.416" cy="27.114" r="1" transform="rotate(-45.001 43.416 27.114)"></svg:circle><svg:circle cx="35.542" cy="46.123" r="1"></svg:circle><svg:circle cx="35.542" cy="23.852" r="1"></svg:circle><svg:circle cx="43.416" cy="42.862" r="1" transform="rotate(-45.001 43.416 42.863)"></svg:circle><svg:circle cx="27.668" cy="27.114" r="1" transform="rotate(-45.001 27.668 27.114)"></svg:circle>`,
})
export class OpenmojiTimerClockIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
