import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCalendarClock20Icon],svg[fluent-color-calendar-clock-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorCalendarClock200)" d="M17 6H3v8.5A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5z"></svg:path><svg:path fill="url(#fluentColorCalendarClock201)" d="M17 6H3v8.5A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5z"></svg:path><svg:path fill="url(#fluentColorCalendarClock205)" fill-opacity=".3" d="M17 6H3v8.5A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5z"></svg:path><svg:path fill="url(#fluentColorCalendarClock202)" d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V7h14z"></svg:path><svg:path fill="url(#fluentColorCalendarClock203)" d="M19 14.5a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0"></svg:path><svg:path fill="url(#fluentColorCalendarClock204)" fill-rule="evenodd" d="M14.5 12a.5.5 0 0 1 .5.5V14h1a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="fluentColorCalendarClock200" x1="8" x2="11.5" y1="6" y2="17" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B3E0FF"></svg:stop><svg:stop offset="1" stop-color="#8CD0FF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCalendarClock201" x1="11.5" x2="13.5" y1="10.5" y2="19.5" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#DCF8FF" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#FF6CE8" stop-opacity=".7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCalendarClock202" x1="3.563" x2="4.904" y1="3" y2="9.816" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0094F0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCalendarClock203" x1="11.5" x2="16" y1="9.5" y2="19.5" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1EC8B0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCalendarClock204" x1="14.219" x2="13.509" y1="12.459" y2="14.892" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#D1D1FF"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorCalendarClock205" cx="0" cy="0" r="1" gradientTransform="rotate(90 -.5 15)scale(6.5)" gradientUnits="userSpaceOnUse"><svg:stop offset=".535" stop-color="#4A43CB"></svg:stop><svg:stop offset="1" stop-color="#4A43CB" stop-opacity="0"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorCalendarClock20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
