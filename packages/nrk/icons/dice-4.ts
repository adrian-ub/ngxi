import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkDice4Icon],svg[nrk-dice-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6a2 2 0 1 1-3.999.001A2 2 0 0 1 8 6m0 12a2 2 0 1 1-3.999.001A2 2 0 0 1 8 18M20 6a2 2 0 1 1-3.999.001A2 2 0 0 1 20 6m0 12a2 2 0 1 1-3.999.001A2 2 0 0 1 20 18"></svg:path>`,
})
export class NrkDice4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
