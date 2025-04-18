import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMeetingRoomOutlineIcon],svg[material-symbols-light-meeting-room-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 20v-1h2V4h8v1h3v14h2v1h-3V6h-2v14zm3-15v14zm4 7.77q.31 0 .54-.23t.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23M7.5 19h6V5h-6z"></svg:path>`,
})
export class MaterialSymbolsLightMeetingRoomOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
