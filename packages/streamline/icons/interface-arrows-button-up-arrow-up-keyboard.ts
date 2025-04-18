import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonUpArrowUpKeyboardIcon],svg[streamline-interface-arrows-button-up-arrow-up-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 10.15L6.65 4a.48.48 0 0 1 .7 0l6.15 6.15"></svg:path>`,
})
export class StreamlineInterfaceArrowsButtonUpArrowUpKeyboardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
