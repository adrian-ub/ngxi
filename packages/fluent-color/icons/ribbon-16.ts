import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorRibbon16Icon],svg[fluent-color-ribbon-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorRibbon160)" d="M5 14.5V9.697c.883.51 1.907.803 3 .803a6 6 0 0 0 3-.803V14.5a.5.5 0 0 1-.757.429L8 13.583L5.757 14.93A.5.5 0 0 1 5 14.5"></svg:path><svg:path fill="url(#fluentColorRibbon161)" d="M8 1a5 5 0 1 0 0 10A5 5 0 0 0 8 1"></svg:path><svg:defs><svg:radialgradient id="fluentColorRibbon160" cx="0" cy="0" r="1" gradientTransform="matrix(0 8.35723 -13.2443 0 8 8.87)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#163697"></svg:stop><svg:stop offset="1" stop-color="#29C3FF"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorRibbon161" cx="0" cy="0" r="1" gradientTransform="rotate(56.615 22.259 -34.273)scale(55.8175 47.8051)" gradientUnits="userSpaceOnUse"><svg:stop offset=".772" stop-color="#FFCD0F"></svg:stop><svg:stop offset=".991" stop-color="#E67505"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorRibbon16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
