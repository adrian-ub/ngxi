import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsCornerUpRightKeyboardTopArrowRightUpIcon],svg[streamline-interface-arrows-corner-up-right-keyboard-top-arrow-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 13.5l13-13m-5 0h5v5"></svg:path>`,
})
export class StreamlineInterfaceArrowsCornerUpRightKeyboardTopArrowRightUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
