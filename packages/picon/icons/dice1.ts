import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDice1Icon],svg[picon-dice1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h1v1H3M0 7h7V0H0"></svg:path>`,
})
export class PiconDice1Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
