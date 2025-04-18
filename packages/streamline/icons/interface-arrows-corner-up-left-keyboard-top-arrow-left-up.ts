import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsCornerUpLeftKeyboardTopArrowLeftUpIcon],svg[streamline-interface-arrows-corner-up-left-keyboard-top-arrow-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 13.5L.5.5m5 0h-5v5"></svg:path>`,
})
export class StreamlineInterfaceArrowsCornerUpLeftKeyboardTopArrowLeftUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
