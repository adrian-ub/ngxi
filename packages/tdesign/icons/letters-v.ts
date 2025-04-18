import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersVIcon],svg[tdesign-letters-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4v10.273l-3 3.652l-3-3.652V4H7v10.273a2 2 0 0 0 .455 1.27l3.772 4.592h1.546l3.772-4.592a2 2 0 0 0 .455-1.27V4z"></svg:path>`,
})
export class TdesignLettersVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
