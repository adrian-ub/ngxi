import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNoMeetingRoomOutlineIcon],svg[material-symbols-no-meeting-room-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 16.15l-2-2V6h-2v6.15l-2-2V5H7.85l-2-2H15v1h4zm.8 6.45L15 17.8V21H3v-2h2V7.8L1.4 4.2l1.4-1.4l18.4 18.4zM7 19h6v-3.2l-6-6zm3-6.2"></svg:path>`,
})
export class MaterialSymbolsNoMeetingRoomOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
