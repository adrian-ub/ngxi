import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNestMultiRoomIcon],svg[material-symbols-nest-multi-room-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 9l8-6l8 6zm0 12v-4h9v4zm11 0v-4h5v4zM4 15v-4h5v4zm7 0v-4h9v4z"></svg:path>`,
})
export class MaterialSymbolsNestMultiRoomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
