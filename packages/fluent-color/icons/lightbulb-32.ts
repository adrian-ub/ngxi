import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorLightbulb32Icon],svg[fluent-color-lightbulb-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorLightbulb320)" d="m20.834 25.5l-.412 1.787A3.5 3.5 0 0 1 17.012 30h-2.023a3.5 3.5 0 0 1-3.41-2.713l-.413-1.787z"></svg:path><svg:path fill="url(#fluentColorLightbulb322)" d="m20.834 25.5l-.412 1.787A3.5 3.5 0 0 1 17.012 30h-2.023a3.5 3.5 0 0 1-3.41-2.713l-.413-1.787z"></svg:path><svg:path fill="url(#fluentColorLightbulb321)" d="M16 2C10.477 2 6 6.477 6 12a9.98 9.98 0 0 0 3.365 7.482c.343.304.561.645.64.986l.93 4.032h10.13l.93-4.032c.079-.34.297-.682.64-.986A9.98 9.98 0 0 0 26 12c0-5.523-4.477-10-10-10"></svg:path><svg:path fill="url(#fluentColorLightbulb323)" d="M21.18 24H10.82l.461 2h9.437z"></svg:path><svg:defs><svg:radialgradient id="fluentColorLightbulb320" cx="0" cy="0" r="1" gradientTransform="matrix(5.97597 17.6714 -30.78135 10.4094 9.94 11.448)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFE06B"></svg:stop><svg:stop offset=".376" stop-color="#FFA43D"></svg:stop><svg:stop offset="1" stop-color="#E67505"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorLightbulb321" cx="0" cy="0" r="1" gradientTransform="rotate(75.116 1.527 8.482)scale(25.5993 36.4764)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFE06B"></svg:stop><svg:stop offset=".376" stop-color="#FFA43D"></svg:stop><svg:stop offset="1" stop-color="#E67505"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorLightbulb322" x1="15.999" x2="16" y1="25.5" y2="30" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#D34719"></svg:stop><svg:stop offset="1" stop-color="#D34719" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLightbulb323" x1="15.181" x2="16.968" y1="24.794" y2="28.5" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFC7A3"></svg:stop><svg:stop offset="1" stop-color="#FF9C70"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorLightbulb32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
