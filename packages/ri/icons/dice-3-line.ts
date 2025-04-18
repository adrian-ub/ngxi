import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDice3LineIcon],svg[ri-dice-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v14h14V5zM3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm12.5 12a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M10 8.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m2 5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class RiDice3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
