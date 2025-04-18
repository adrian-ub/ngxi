import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsCornerDownRightDownKeyboardArrowRightBottomIcon],svg[streamline-interface-arrows-corner-down-right-down-keyboard-arrow-right-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5.5l13 13m-5 0h5v-5"></svg:path>`,
})
export class StreamlineInterfaceArrowsCornerDownRightDownKeyboardArrowRightBottomIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
