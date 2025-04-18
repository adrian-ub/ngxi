import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRoomServiceIcon],svg[mdi-room-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5a2 2 0 0 1 2 2q0 .36-.12.69C17.95 8.5 21 11.91 21 16H3c0-4.09 3.05-7.5 7.12-8.31Q10 7.36 10 7a2 2 0 0 1 2-2m10 14H2v-2h20z"></svg:path>`,
})
export class MdiRoomServiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
