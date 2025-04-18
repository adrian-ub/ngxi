import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerKeyboardPrevious1PreviousKeyboardArrowLeftIcon],svg[streamline-computer-keyboard-previous-1-previous-keyboard-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 7h-10M7 3.5L3.5 7L7 10.5m-6.5-7v7"></svg:path>`,
})
export class StreamlineComputerKeyboardPrevious1PreviousKeyboardArrowLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
