import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNoMeetingRoomOutlineIcon],svg[material-symbols-light-no-meeting-room-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 14.189l-1-1V6h-2v5.189l-1-1V5H7.85l-1-1H14v1h3zm2.492 6.719L14 15.416V20H4v-1h2V7.416L3.092 4.508L3.8 3.8l16.4 16.4zM7 19h6v-4.584l-6-6zm3-7.584"></svg:path>`,
})
export class MaterialSymbolsLightNoMeetingRoomOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
