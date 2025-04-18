import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCalendarCheckmark20Icon],svg[fluent-color-calendar-checkmark-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorCalendarCheckmark200)" d="M3 6h14v8.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5z"></svg:path><svg:path fill="url(#fluentColorCalendarCheckmark201)" d="M3 6h14v8.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5z"></svg:path><svg:path fill="url(#fluentColorCalendarCheckmark205)" fill-opacity=".3" d="M3 6h14v8.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5z"></svg:path><svg:path fill="url(#fluentColorCalendarCheckmark202)" d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V7h14z"></svg:path><svg:path fill="url(#fluentColorCalendarCheckmark203)" d="M19 14.5a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0"></svg:path><svg:path fill="url(#fluentColorCalendarCheckmark204)" fill-rule="evenodd" d="M16.854 12.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647l2.646-2.647a.5.5 0 0 1 .708 0" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="fluentColorCalendarCheckmark200" x1="8" x2="11.5" y1="6" y2="17" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B3E0FF"></svg:stop><svg:stop offset="1" stop-color="#8CD0FF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCalendarCheckmark201" x1="11.5" x2="13.5" y1="10.5" y2="19.5" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#DCF8FF" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#FF6CE8" stop-opacity=".7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCalendarCheckmark202" x1="3.563" x2="4.904" y1="3" y2="9.816" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0094F0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCalendarCheckmark203" x1="10.321" x2="16.532" y1="11.688" y2="18.141" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#52D17C"></svg:stop><svg:stop offset="1" stop-color="#22918B"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCalendarCheckmark204" x1="12.938" x2="13.946" y1="12.908" y2="17.36" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#E3FFD9"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorCalendarCheckmark205" cx="0" cy="0" r="1" gradientTransform="rotate(90 -.5 15)scale(6.5)" gradientUnits="userSpaceOnUse"><svg:stop offset=".535" stop-color="#4A43CB"></svg:stop><svg:stop offset="1" stop-color="#4A43CB" stop-opacity="0"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorCalendarCheckmark20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
