import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilRoomIcon],svg[cil-room-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M440 424V88h-88V13.005L88 58.522V424H16v32h86.9L352 490.358V120h56v336h88v-32Zm-120 29.642l-200-27.586V85.478L320 51Z"></svg:path><svg:path fill="currentColor" d="M256 232h32v64h-32z"></svg:path>`,
})
export class CilRoomIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
