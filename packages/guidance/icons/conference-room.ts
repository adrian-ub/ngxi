import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceConferenceRoomIcon],svg[guidance-conference-room-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6 14.5H1.5v-13h21v13H18m-.5 9.5a10.6 10.6 0 0 1 1.572-5.555l.428-.695v-.25h-15v.25l.428.695A10.6 10.6 0 0 1 6.5 24m9.5-9v-3.5s-1.5-1-4-1s-4 1-4 1V15m3.85-6.5s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0c0 1.25-1.596 2.25-1.596 2.25z"></svg:path>`,
})
export class GuidanceConferenceRoomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
