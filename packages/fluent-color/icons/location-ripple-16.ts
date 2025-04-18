import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorLocationRipple16Icon],svg[fluent-color-location-ripple-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorLocationRipple162)" d="M14 12.5C14 14 11.314 15 8 15s-6-1-6-2.5S4.686 10 8 10s6 1 6 2.5"></svg:path><svg:path fill="url(#fluentColorLocationRipple160)" d="M8 1a5 5 0 0 0-5 5c0 1.144.65 2.35 1.393 3.372c.757 1.043 1.677 1.986 2.346 2.62a1.824 1.824 0 0 0 2.522 0c.669-.634 1.589-1.577 2.346-2.62C12.349 8.35 13 7.144 13 6a5 5 0 0 0-5-5"></svg:path><svg:path fill="url(#fluentColorLocationRipple161)" d="M9.5 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path><svg:defs><svg:lineargradient id="fluentColorLocationRipple160" x1=".813" x2="8.969" y1="-2.285" y2="10.735" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLocationRipple161" x1="6.674" x2="8.236" y1="6.133" y2="7.757" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#FECBE6"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorLocationRipple162" cx="0" cy="0" r="1" gradientTransform="matrix(9.42857 -1.66667 .69566 3.93547 7.571 11.667)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#7B7BFF"></svg:stop><svg:stop offset=".502" stop-color="#A3A3FF"></svg:stop><svg:stop offset="1" stop-color="#CEB0FF"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorLocationRipple16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
