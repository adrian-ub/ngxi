import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMinusIcon],svg[marketeq-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M39.583 25H10.417"></svg:path>`,
})
export class MarketeqMinusIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
