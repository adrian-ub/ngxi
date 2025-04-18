import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorListBar20Icon],svg[fluent-color-list-bar-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorListBar200)" d="M15.5 7H7l-.5-2L7 3h8.5A1.5 1.5 0 0 1 17 4.5v1A1.5 1.5 0 0 1 15.5 7"></svg:path><svg:path fill="url(#fluentColorListBar201)" d="M7 12h8.5a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 15.5 8H7l-.5 2z"></svg:path><svg:path fill="url(#fluentColorListBar202)" d="M7 17h8.5a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5H7l-.5 2z"></svg:path><svg:path fill="url(#fluentColorListBar203)" d="M7 7V3H4.5A1.5 1.5 0 0 0 3 4.5v1A1.5 1.5 0 0 0 4.5 7z"></svg:path><svg:path fill="url(#fluentColorListBar204)" d="M7 8v4H4.5A1.5 1.5 0 0 1 3 10.5v-1A1.5 1.5 0 0 1 4.5 8z"></svg:path><svg:path fill="url(#fluentColorListBar205)" d="M7 13v4H4.5A1.5 1.5 0 0 1 3 15.5v-1A1.5 1.5 0 0 1 4.5 13z"></svg:path><svg:defs><svg:lineargradient id="fluentColorListBar200" x1="4.925" x2="16.953" y1="1" y2="16.207" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DFF1"></svg:stop><svg:stop offset="1" stop-color="#0094F0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorListBar201" x1="4.925" x2="16.953" y1="1" y2="16.207" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DFF1"></svg:stop><svg:stop offset="1" stop-color="#0094F0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorListBar202" x1="4.925" x2="16.953" y1="1" y2="16.207" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DFF1"></svg:stop><svg:stop offset="1" stop-color="#0094F0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorListBar203" x1="3.951" x2="9.941" y1="4.861" y2="7.594" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorListBar204" x1="3.951" x2="9.941" y1="4.861" y2="7.594" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorListBar205" x1="3.951" x2="9.941" y1="4.861" y2="7.594" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorListBar20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
