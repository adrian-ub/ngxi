import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorLaptop24Icon],svg[fluent-color-laptop-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorLaptop240)" d="M6.254 16L12 15.469l5.754.531h.065a1 1 0 0 1 .35.064l3.126 1.172c.423.158.704.562.705 1.014H2c0-.451.28-.855.702-1.013l3.128-1.173A1 1 0 0 1 6.181 16z"></svg:path><svg:path fill="url(#fluentColorLaptop241)" d="M2.75 17.5a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="url(#fluentColorLaptop242)" d="M4 6.25A2.25 2.25 0 0 1 6.25 4h11.5A2.25 2.25 0 0 1 20 6.25v7.5A2.25 2.25 0 0 1 17.75 16H6.25A2.25 2.25 0 0 1 4 13.75z"></svg:path><svg:defs><svg:lineargradient id="fluentColorLaptop240" x1="22" x2="20.765" y1="18.912" y2="12.254" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#63686E"></svg:stop><svg:stop offset="1" stop-color="#889096"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLaptop241" x1="22" x2="21.792" y1="18.893" y2="16.123" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#889096"></svg:stop><svg:stop offset="1" stop-color="#AAB3BD"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLaptop242" x1="15.2" x2="15.95" y1="4" y2="17.722" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6CE0FF"></svg:stop><svg:stop offset="1" stop-color="#4894FE"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorLaptop24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
