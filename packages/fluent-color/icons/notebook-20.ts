import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorNotebook20Icon],svg[fluent-color-notebook-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorNotebook200)" d="M14.5 4h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2zm0 4h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2zm0 4h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2z"></svg:path><svg:path fill="url(#fluentColorNotebook201)" d="M5 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></svg:path><svg:path fill="url(#fluentColorNotebook203)" fill-opacity=".5" d="M5 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></svg:path><svg:path fill="url(#fluentColorNotebook202)" d="M5.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"></svg:path><svg:defs><svg:lineargradient id="fluentColorNotebook200" x1="14.5" x2="23.055" y1="-2.5" y2="17.79" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#D373FC"></svg:stop><svg:stop offset="1" stop-color="#2052CB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorNotebook201" x1="1.5" x2=".605" y1="2" y2="19.905" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E587F2"></svg:stop><svg:stop offset="1" stop-color="#816CDE"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorNotebook202" x1="6.5" x2="11.248" y1="5" y2="10.123" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDD3FF"></svg:stop><svg:stop offset="1" stop-color="#F3D8FF"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorNotebook203" cx="0" cy="0" r="1" gradientTransform="rotate(75.378 3.603 6.001)scale(18.3207 81.0671)" gradientUnits="userSpaceOnUse"><svg:stop offset=".5" stop-color="#DD3CE2" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#DD3CE2"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorNotebook20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
