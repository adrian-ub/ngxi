import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMessageLockOutlineIcon],svg[mdi-message-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3v-.5C23 1.1 21.9 0 20.5 0S18 1.1 18 2.5V3c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1V4c0-.5-.5-1-1-1m-1 0h-3v-.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5zm0 8v5c0 1.1-.9 2-2 2H6l-4 4V4c0-1.1.9-2 2-2h11v2H4v13.2L5.2 16H20v-5z"></svg:path>`,
})
export class MdiMessageLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
