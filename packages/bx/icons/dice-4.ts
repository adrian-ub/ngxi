import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxDice4Icon],svg[bx-dice-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M5 19V5h14l.002 14z"></svg:path><svg:circle cx="8" cy="8" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="16" cy="16" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="8" cy="16" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="16" cy="8" r="1.5" fill="currentColor"></svg:circle>`,
})
export class BxDice4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
