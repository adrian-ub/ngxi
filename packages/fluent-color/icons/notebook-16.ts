import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorNotebook16Icon],svg[fluent-color-notebook-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorNotebook160)" d="M12.5 4h1.625c.207 0 .375.168.375.375v1.25a.375.375 0 0 1-.375.375H12.5zm1.625 3H12.5v2h1.625a.375.375 0 0 0 .375-.375v-1.25A.375.375 0 0 0 14.125 7M12.5 10h1.625c.207 0 .375.168.375.375v1.25a.375.375 0 0 1-.375.375H12.5z"></svg:path><svg:path fill="url(#fluentColorNotebook161)" d="M3.75 1A1.75 1.75 0 0 0 2 2.75v10.5c0 .966.784 1.75 1.75 1.75h7.5A1.75 1.75 0 0 0 13 13.25V2.75A1.75 1.75 0 0 0 11.25 1z"></svg:path><svg:path fill="url(#fluentColorNotebook163)" fill-opacity=".5" d="M3.75 1A1.75 1.75 0 0 0 2 2.75v10.5c0 .966.784 1.75 1.75 1.75h7.5A1.75 1.75 0 0 0 13 13.25V2.75A1.75 1.75 0 0 0 11.25 1z"></svg:path><svg:path fill="url(#fluentColorNotebook162)" d="M4 3.75A.75.75 0 0 1 4.75 3h5.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-5.5A.75.75 0 0 1 4 4.25z"></svg:path><svg:defs><svg:lineargradient id="fluentColorNotebook160" x1="12.5" x2="18.308" y1="-.727" y2="14.426" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#D373FC"></svg:stop><svg:stop offset="1" stop-color="#2052CB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorNotebook161" x1=".625" x2="-.123" y1="1" y2="16.671" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E587F2"></svg:stop><svg:stop offset="1" stop-color="#816CDE"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorNotebook162" x1="5.313" x2="10.067" y1="3" y2="7.489" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDD3FF"></svg:stop><svg:stop offset="1" stop-color="#F3D8FF"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorNotebook163" cx="0" cy="0" r="1" gradientTransform="rotate(74.713 3.439 4.675)scale(16.0803 74.0817)" gradientUnits="userSpaceOnUse"><svg:stop offset=".5" stop-color="#DD3CE2" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#DD3CE2"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorNotebook16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
