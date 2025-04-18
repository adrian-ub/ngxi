import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCursorIcon],svg[marketeq-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M40.708 6.458L7.542 21.48a2.437 2.437 0 0 0 .791 4.563l12.98 2.625l2.645 13a2.437 2.437 0 0 0 4.563.812L43.54 9.292a2.084 2.084 0 0 0-2.833-2.834"></svg:path>`,
})
export class MarketeqCursorIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
