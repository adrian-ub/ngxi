import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqPlusIcon],svg[marketeq-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M25 10.417v29.166M10.417 25h29.166z"></svg:path>`,
})
export class MarketeqPlusIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
