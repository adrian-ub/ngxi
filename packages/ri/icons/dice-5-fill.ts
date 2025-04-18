import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDice5FillIcon],svg[ri-dice-5-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm5 5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M8.5 17a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m7 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0-7a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-2 2a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class RiDice5FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
