import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDice2Icon],svg[picon-dice2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5h1v1H1m4-5h1v1H5M0 7h7V0H0"></svg:path>`,
})
export class PiconDice2Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
