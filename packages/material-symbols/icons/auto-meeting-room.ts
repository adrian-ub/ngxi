import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAutoMeetingRoomIcon],svg[material-symbols-auto-meeting-room-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 21v-2h2V3h10v1h4v8h-2V6h-2v15H1Zm8-8q.425 0 .713-.288T10 12q0-.425-.288-.713T9 11q-.425 0-.713.288T8 12q0 .425.288.713T9 13Zm10 9l1.25-2.75L23 18l-2.75-1.25L19 14l-1.25 2.75L15 18l2.75 1.25L19 22Z"></svg:path>`,
})
export class MaterialSymbolsAutoMeetingRoomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
