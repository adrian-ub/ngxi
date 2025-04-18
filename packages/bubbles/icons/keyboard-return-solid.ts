import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesKeyboardReturnSolidIcon],svg[bubbles-keyboard-return-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 .333H3A2.675 2.675 0 0 0 .333 3v10A2.674 2.674 0 0 0 3 15.667h10A2.674 2.674 0 0 0 15.667 13V3A2.674 2.674 0 0 0 13 .333m-.667 7.334A1.333 1.333 0 0 1 11 9H7.167A.167.167 0 0 0 7 9.167v1.166a.666.666 0 0 1-1.138.472l-2-2a.667.667 0 0 1 0-.943l2-2A.667.667 0 0 1 7 6.333V7.5a.166.166 0 0 0 .167.167h3.666A.166.166 0 0 0 11 7.5V5.667a.667.667 0 0 1 1.333 0z"></svg:path>`,
})
export class BubblesKeyboardReturnSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
