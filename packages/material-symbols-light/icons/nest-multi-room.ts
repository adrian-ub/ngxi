import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNestMultiRoomIcon],svg[material-symbols-light-nest-multi-room-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 9.5l7-5.27l7 5.27zM5 20v-4.25h8.5V20zm9.5 0v-4.25H19V20zM5 14.75V10.5h4.5v4.25zm5.5 0V10.5H19v4.25z"></svg:path>`,
})
export class MaterialSymbolsLightNestMultiRoomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
