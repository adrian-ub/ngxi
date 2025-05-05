import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPokeballIcon],svg[picon-pokeball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5.25 8-5.25 8 0S0 9.25 0 4m1 0c0 4 6 4 6 0H6Q4 1 2 4m1 0l1-1l1 1l-1 1"></svg:path>`,
})
export class PiconPokeballIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
