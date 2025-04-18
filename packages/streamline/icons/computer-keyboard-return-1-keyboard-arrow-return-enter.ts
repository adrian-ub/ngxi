import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerKeyboardReturn1KeyboardArrowReturnEnterIcon],svg[streamline-computer-keyboard-return-1-keyboard-arrow-return-enter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 10.5h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-4"></svg:path><svg:path d="m3.5 7.5l-3 3l3 3"></svg:path></svg:g>`,
})
export class StreamlineComputerKeyboardReturn1KeyboardArrowReturnEnterIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
