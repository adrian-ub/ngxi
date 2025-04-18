import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMeetingRoomRoundedIcon],svg[material-symbols-meeting-room-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21q-.425 0-.712-.288T3 20t.288-.712T4 19h1V4q0-.425.288-.712T6 3h7q.425 0 .713.288T14 4h4q.425 0 .713.288T19 5v14h1q.425 0 .713.288T21 20t-.288.713T20 21h-2q-.425 0-.712-.288T17 20V6h-3v14q0 .425-.288.713T13 21zm8-9q0-.425-.288-.712T11 11t-.712.288T10 12t.288.713T11 13t.713-.288T12 12"></svg:path>`,
})
export class MaterialSymbolsMeetingRoomRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
