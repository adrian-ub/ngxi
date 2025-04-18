import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRoomServiceOutlineIcon],svg[mdi-room-service-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5a2 2 0 0 1 2 2q0 .36-.12.69C17.95 8.5 21 11.91 21 16H3c0-4.09 3.05-7.5 7.12-8.31Q10 7.36 10 7a2 2 0 0 1 2-2m10 14H2v-2h20zM12 9.5c-3.11 0-5.75 1.89-6.66 4.5h13.32c-.91-2.61-3.55-4.5-6.66-4.5"></svg:path>`,
})
export class MdiRoomServiceOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
