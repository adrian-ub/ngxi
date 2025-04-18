import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDice1FillIcon],svg[ri-dice-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm7 11a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiDice1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
