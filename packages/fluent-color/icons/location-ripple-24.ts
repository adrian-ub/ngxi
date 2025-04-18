import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorLocationRipple24Icon],svg[fluent-color-location-ripple-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorLocationRipple242)" d="M21 19c0 2.5-4.03 4-9 4s-9-1.5-9-4c0-2.406 4.03-4 9-4s9 1.5 9 4"></svg:path><svg:path fill="url(#fluentColorLocationRipple240)" d="M12 2a7.5 7.5 0 0 0-7.5 7.5c0 1.932 1.064 3.8 2.268 5.316c1.22 1.537 2.678 2.829 3.655 3.622c.926.75 2.228.75 3.154 0c.977-.793 2.435-2.085 3.655-3.622C18.436 13.301 19.5 11.432 19.5 9.5A7.5 7.5 0 0 0 12 2"></svg:path><svg:path fill="url(#fluentColorLocationRipple241)" d="M14.5 9.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:defs><svg:lineargradient id="fluentColorLocationRipple240" x1="1.219" x2="13.202" y1="-2.857" y2="16.549" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLocationRipple241" x1="9.79" x2="12.394" y1="9.721" y2="12.428" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#FECBE6"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorLocationRipple242" cx="0" cy="0" r="1" gradientTransform="rotate(-10.678 100.2 -51.93)scale(14.3921 6.38107)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#7B7BFF"></svg:stop><svg:stop offset=".502" stop-color="#A3A3FF"></svg:stop><svg:stop offset="1" stop-color="#CEB0FF"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorLocationRipple24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
