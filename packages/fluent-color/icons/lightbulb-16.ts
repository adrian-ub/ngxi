import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorLightbulb16Icon],svg[fluent-color-lightbulb-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorLightbulb160)" d="m5.437 11.5l.38 1.395A1.5 1.5 0 0 0 7.264 14h1.472a1.5 1.5 0 0 0 1.448-1.105l.38-1.395z"></svg:path><svg:path fill="url(#fluentColorLightbulb162)" d="m5.437 11.5l.38 1.395A1.5 1.5 0 0 0 7.264 14h1.472a1.5 1.5 0 0 0 1.448-1.105l.38-1.395z"></svg:path><svg:path fill="url(#fluentColorLightbulb161)" d="M10.564 11.5H5.436l-.41-1.505a.65.65 0 0 0-.181-.287a4.5 4.5 0 1 1 6.31 0a.65.65 0 0 0-.18.287z"></svg:path><svg:path fill="url(#fluentColorLightbulb163)" d="m10.427 12l.273-1H5.3l.273 1z"></svg:path><svg:defs><svg:radialgradient id="fluentColorLightbulb160" cx="0" cy="0" r="1" gradientTransform="matrix(3.1694 9.81748 -16.47486 5.31863 4.786 3.694)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFE06B"></svg:stop><svg:stop offset=".376" stop-color="#FFA43D"></svg:stop><svg:stop offset="1" stop-color="#E67505"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorLightbulb161" cx="0" cy="0" r="1" gradientTransform="matrix(2.95904 10.44588 -15.72265 4.4538 5 3.193)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFE06B"></svg:stop><svg:stop offset=".376" stop-color="#FFA43D"></svg:stop><svg:stop offset="1" stop-color="#E67505"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorLightbulb162" x1="8" x2="8" y1="11.5" y2="14" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#D34719"></svg:stop><svg:stop offset="1" stop-color="#D34719" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLightbulb163" x1="7.573" x2="8.443" y1="11.397" y2="13.278" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFC7A3"></svg:stop><svg:stop offset="1" stop-color="#FF9C70"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorLightbulb16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
