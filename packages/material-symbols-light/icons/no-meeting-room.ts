import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNoMeetingRoomIcon],svg[material-symbols-light-no-meeting-room-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 14.189l-1-1V6h-2v5.189L6.85 4H14v1h3zm2.492 6.719L14 15.416V20H4v-1h2V7.416L3.092 4.508L3.8 3.8l16.4 16.4z"></svg:path>`,
})
export class MaterialSymbolsLightNoMeetingRoomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
