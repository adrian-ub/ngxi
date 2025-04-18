import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNoMeetingRoomRoundedIcon],svg[material-symbols-light-no-meeting-room-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 14.189l-1-1V6h-2v5.189L6.85 4h6.342q.343 0 .544.247q.2.247.264.56V5h2.192q.349 0 .578.23t.23.578zm2.139 6.365L14 15.416v3.776q0 .349-.23.578t-.578.23H4.5q-.213 0-.357-.143T4 19.5t.143-.357T4.5 19H6V7.416L3.446 4.862q-.14-.14-.15-.345q-.01-.203.15-.363t.354-.16t.354.16l15.692 15.692q.14.14.15.345q.01.203-.15.363t-.354.16t-.353-.16"></svg:path>`,
})
export class MaterialSymbolsLightNoMeetingRoomRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
