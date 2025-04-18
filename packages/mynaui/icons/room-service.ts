import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiRoomServiceIcon],svg[mynaui-room-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.167V4m0 2.167a8 8 0 0 1 8 8V17H4v-2.833a8 8 0 0 1 8-8M3 20h18"></svg:path>`,
})
export class MynauiRoomServiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
