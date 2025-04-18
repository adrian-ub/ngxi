import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorLightbulb24Icon],svg[fluent-color-lightbulb-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorLightbulb240)" d="M15.247 20.258a2.25 2.25 0 0 1-2.019 1.736l-.173.006h-2.111a2.25 2.25 0 0 1-2.147-1.576l-.046-.168l-.405-1.756h7.308z"></svg:path><svg:path fill="url(#fluentColorLightbulb242)" d="M15.247 20.258a2.25 2.25 0 0 1-2.019 1.736l-.173.006h-2.111a2.25 2.25 0 0 1-2.147-1.576l-.046-.168l-.405-1.756h7.308z"></svg:path><svg:path fill="url(#fluentColorLightbulb241)" d="M8.23 18h7.54l.644-2.783a.25.25 0 0 1 .07-.125c1.83-1.747 2.766-3.704 2.766-5.84a7.25 7.25 0 1 0-14.5 0c0 2.136.936 4.093 2.767 5.84a.25.25 0 0 1 .071.125z"></svg:path><svg:path fill="url(#fluentColorLightbulb243)" d="m8.46 19l-.346-1.5h7.772l-.348 1.5z"></svg:path><svg:defs><svg:radialgradient id="fluentColorLightbulb240" cx="0" cy="0" r="1" gradientTransform="matrix(4.51735 13.7447 -23.40132 7.69111 7.419 7.57)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFE06B"></svg:stop><svg:stop offset=".376" stop-color="#FFA43D"></svg:stop><svg:stop offset="1" stop-color="#E67505"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorLightbulb241" cx="0" cy="0" r="1" gradientTransform="matrix(4.7673 17.59147 -25.49142 6.9082 7.167 4.013)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFE06B"></svg:stop><svg:stop offset=".376" stop-color="#FFA43D"></svg:stop><svg:stop offset="1" stop-color="#E67505"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorLightbulb242" x1="11.999" x2="11.999" y1="18.5" y2="22" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#D34719"></svg:stop><svg:stop offset="1" stop-color="#D34719" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLightbulb243" x1="11.385" x2="12.725" y1="18.095" y2="20.874" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFC7A3"></svg:stop><svg:stop offset="1" stop-color="#FF9C70"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorLightbulb24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
