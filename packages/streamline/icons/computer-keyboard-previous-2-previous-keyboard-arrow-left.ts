import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerKeyboardPrevious2PreviousKeyboardArrowLeftIcon],svg[streamline-computer-keyboard-previous-2-previous-keyboard-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M8 5L6 7l2 2M6 7h4.5m-7-2.5v5"></svg:path></svg:g>`,
})
export class StreamlineComputerKeyboardPrevious2PreviousKeyboardArrowLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
