import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceMusicRoomIcon],svg[guidance-music-room-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8.5 19a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Zm0 0V5.5a25.5 25.5 0 0 0 12.817-3.457l.933-.543h.25v3.85m0 11.65a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Zm0 0V5.35M8.5 9.5a25.5 25.5 0 0 0 12.817-3.457l.933-.543l.25-.15"></svg:path>`,
})
export class GuidanceMusicRoomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
