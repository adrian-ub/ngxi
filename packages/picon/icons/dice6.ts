import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDice6Icon],svg[picon-dice6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h1v1H2m2-1h1v1H4M2 3h1v1H2m2-1h1v1H4m0-3h1v1H4M2 1h1v1H2M0 7h7V0H0"></svg:path>`,
})
export class PiconDice6Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
