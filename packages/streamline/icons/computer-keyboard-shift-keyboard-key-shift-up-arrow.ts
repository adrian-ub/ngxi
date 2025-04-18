import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerKeyboardShiftKeyboardKeyShiftUpArrowIcon],svg[streamline-computer-keyboard-shift-keyboard-key-shift-up-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M8.5 10.5v-3h2L7 3.5l-3.5 4h2v3h3z"></svg:path></svg:g>`,
})
export class StreamlineComputerKeyboardShiftKeyboardKeyShiftUpArrowIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
