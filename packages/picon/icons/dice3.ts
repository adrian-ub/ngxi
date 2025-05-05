import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDice3Icon],svg[picon-dice3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5h1v1H1m2-3h1v1H3m2-3h1v1H5M0 7h7V0H0"></svg:path>`,
})
export class PiconDice3Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
