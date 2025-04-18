import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorNotebook32Icon],svg[fluent-color-notebook-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorNotebook320)" d="M26 8h2.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75H26zm2.25 6H26v4h2.25a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75M26 20h2.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75H26z"></svg:path><svg:path fill="url(#fluentColorNotebook321)" d="M7.25 2A3.25 3.25 0 0 0 4 5.25v21.5A3.25 3.25 0 0 0 7.25 30h16.5A3.25 3.25 0 0 0 27 26.75V5.25A3.25 3.25 0 0 0 23.75 2z"></svg:path><svg:path fill="url(#fluentColorNotebook323)" fill-opacity=".5" d="M7.25 2A3.25 3.25 0 0 0 4 5.25v21.5A3.25 3.25 0 0 0 7.25 30h16.5A3.25 3.25 0 0 0 27 26.75V5.25A3.25 3.25 0 0 0 23.75 2z"></svg:path><svg:path fill="url(#fluentColorNotebook322)" d="M10 7h11a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1"></svg:path><svg:defs><svg:lineargradient id="fluentColorNotebook320" x1="26" x2="40.085" y1="-1.455" y2="26.107" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#D373FC"></svg:stop><svg:stop offset="1" stop-color="#2052CB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorNotebook321" x1="1.125" x2="-.306" y1="2" y2="33.347" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E587F2"></svg:stop><svg:stop offset="1" stop-color="#816CDE"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorNotebook322" x1="11.438" x2="20.88" y1="7" y2="15.278" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDD3FF"></svg:stop><svg:stop offset="1" stop-color="#F3D8FF"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorNotebook323" cx="0" cy="0" r="1" gradientTransform="matrix(8.86458 31.02275 -148.45811 42.4211 14.542 .25)" gradientUnits="userSpaceOnUse"><svg:stop offset=".5" stop-color="#DD3CE2" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#DD3CE2"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorNotebook32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
