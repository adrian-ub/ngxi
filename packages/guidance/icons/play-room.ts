import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidancePlayRoomIcon],svg[guidance-play-room-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.5 8v5m2.5-2.5H5m-.909 10H5.5s1.5-5 6.5-5s6.5 5 6.5 5h1.409a3.59 3.59 0 0 0 3.499-4.398L20.5 3.5h-.25S17 4.5 12 4.5s-8.25-1-8.25-1H3.5L.592 16.102A3.59 3.59 0 0 0 4.091 20.5ZM16.5 8.5a2 2 0 1 1 0 4a2 2 0 0 1 0-4Z"></svg:path>`,
})
export class GuidancePlayRoomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
