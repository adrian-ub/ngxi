import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDice3FillIcon],svg[ri-dice-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm3.5 7a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m7 7a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-2-5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class RiDice3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
