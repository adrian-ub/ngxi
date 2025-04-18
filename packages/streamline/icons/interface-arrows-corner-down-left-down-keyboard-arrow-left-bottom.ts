import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsCornerDownLeftDownKeyboardArrowLeftBottomIcon],svg[streamline-interface-arrows-corner-down-left-down-keyboard-arrow-left-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5.5l-13 13m5 0h-5v-5"></svg:path>`,
})
export class StreamlineInterfaceArrowsCornerDownLeftDownKeyboardArrowLeftBottomIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
