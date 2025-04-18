import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDice1LineIcon],svg[ri-dice-1-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v14h14V5zM3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm9 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiDice1LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
