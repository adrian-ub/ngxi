import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiTallyFourIcon],svg[mynaui-tally-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v16M9.333 4v16m5.334-16v16M20 4v16"></svg:path>`,
})
export class MynauiTallyFourIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
