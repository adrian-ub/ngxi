import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNestMultiRoomOutlineIcon],svg[material-symbols-nest-multi-room-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21V9l8-6l8 6v12zm2-2h7v-3H6zm9 0h3v-3h-3zm-9-5h3v-2.975H6zm5 0h7v-2.975h-7zM7.3 9.025h9.4L12 5.5z"></svg:path>`,
})
export class MaterialSymbolsNestMultiRoomOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
