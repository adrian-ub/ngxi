import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasDuoChatNewIcon],svg[pajamas-duo-chat-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 4A1.5 1.5 0 0 1 3 2.5h10A1.5 1.5 0 0 1 14.5 4v3.25a.75.75 0 0 0 1.5 0V4a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v11.25a.75.75 0 0 0 1.28.53L4.063 13H8.25a.75.75 0 0 0 0-1.5H3.443l-.22.22L1.5 13.44zM13 14a.75.75 0 0 1-.75-.75v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5a.75.75 0 0 1 1.5 0v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5A.75.75 0 0 1 13 14" clip-rule="evenodd"></svg:path>`,
})
export class PajamasDuoChatNewIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
