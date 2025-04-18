import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiDice5Icon],svg[gravity-ui-dice-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3m-3 1.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3zm9 2.15a1.15 1.15 0 1 0 0-2.3a1.15 1.15 0 0 0 0 2.3M9.15 8a1.15 1.15 0 1 1-2.3 0a1.15 1.15 0 0 1 2.3 0M5.5 11.65a1.15 1.15 0 1 0 0-2.3a1.15 1.15 0 0 0 0 2.3m6.15-1.15a1.15 1.15 0 1 1-2.3 0a1.15 1.15 0 0 1 2.3 0M5.5 6.65a1.15 1.15 0 1 0 0-2.3a1.15 1.15 0 0 0 0 2.3" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiDice5Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
