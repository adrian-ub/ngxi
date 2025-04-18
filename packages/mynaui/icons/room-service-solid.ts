import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiRoomServiceSolidIcon],svg[mynaui-room-service-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 20a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m10.5-16a.75.75 0 0 0-1.5 0v1.448a8.75 8.75 0 0 0-8 8.719V17c0 .414.336.75.75.75h16a.75.75 0 0 0 .75-.75v-2.833a8.75 8.75 0 0 0-8-8.719z"></svg:path>`,
})
export class MynauiRoomServiceSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
