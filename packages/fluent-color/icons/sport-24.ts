import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorSport24Icon],svg[fluent-color-sport-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="14" cy="10" r="8" fill="url(#fluentColorSport240)"></svg:circle><svg:circle cx="14" cy="10" r="8" fill="url(#fluentColorSport241)" fill-opacity=".8"></svg:circle><svg:path fill="url(#fluentColorSport244)" d="M9.468 3.407L14.5 8.439l.761-.761a4.23 4.23 0 0 1-.76-2.428c0-1.196.493-2.277 1.289-3.05c.596.137 1.168.34 1.706.602a2.75 2.75 0 0 0-1.147 3.789l2.753-2.754q.58.481 1.06 1.061L17.41 7.651a2.75 2.75 0 0 0 3.789-1.147A8 8 0 0 1 21.8 8.21a4.24 4.24 0 0 1-3.05 1.29a4.23 4.23 0 0 1-2.428-.762l-.761.762l5.032 5.032q-.43.624-.966 1.155L14.5 10.56l-3.97 3.97l-1.06-1.062l3.97-3.97l-5.127-5.126a8 8 0 0 1 1.155-.966" opacity=".6"></svg:path><svg:path fill="url(#fluentColorSport242)" d="M4.25 9A2.25 2.25 0 0 0 2 11.25v2A8.75 8.75 0 0 0 10.75 22h2A2.25 2.25 0 0 0 15 19.75v-2A8.75 8.75 0 0 0 6.25 9z"></svg:path><svg:path fill="url(#fluentColorSport243)" fill-opacity=".9" d="M4.25 9A2.25 2.25 0 0 0 2 11.25v2A8.75 8.75 0 0 0 10.75 22h2A2.25 2.25 0 0 0 15 19.75v-2A8.75 8.75 0 0 0 6.25 9z"></svg:path><svg:path fill="#FFC470" d="M7.78 13.72a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06z"></svg:path><svg:defs><svg:radialgradient id="fluentColorSport240" cx="0" cy="0" r="1" gradientTransform="rotate(-90 21.244 5.09)scale(27.9566)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EB4824"></svg:stop><svg:stop offset=".978" stop-color="#FF921F"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorSport241" cx="0" cy="0" r="1" gradientTransform="matrix(6.66667 -6.66667 9.1204 9.1204 8 16)" gradientUnits="userSpaceOnUse"><svg:stop offset=".588" stop-color="#AA1D2D"></svg:stop><svg:stop offset=".931" stop-color="#EB4824" stop-opacity=".1"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorSport242" cx="0" cy="0" r="1" gradientTransform="rotate(53.531 -7.917 7.95)scale(16.9004 15.2827)" gradientUnits="userSpaceOnUse"><svg:stop offset=".24" stop-color="#AE5606"></svg:stop><svg:stop offset="1" stop-color="#944600"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorSport243" cx="0" cy="0" r="1" gradientTransform="rotate(10.938 -129.48 47.962)scale(19.2374)" gradientUnits="userSpaceOnUse"><svg:stop offset=".626" stop-color="#FFA43D" stop-opacity="0"></svg:stop><svg:stop offset=".927" stop-color="#FFA43D"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorSport244" x1="20.05" x2="11.576" y1="4.194" y2="12.667" gradientUnits="userSpaceOnUse"><svg:stop offset=".713" stop-color="#8E250B"></svg:stop><svg:stop offset=".903" stop-color="#8E250B" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorSport24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
