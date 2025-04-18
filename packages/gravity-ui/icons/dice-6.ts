import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiDice6Icon],svg[gravity-ui-dice-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 3h-7A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3m-7-1.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3zM11.65 5a1.15 1.15 0 1 1-2.3 0a1.15 1.15 0 0 1 2.3 0M5.5 12.15a1.15 1.15 0 1 0 0-2.3a1.15 1.15 0 0 0 0 2.3M11.65 11a1.15 1.15 0 1 1-2.3 0a1.15 1.15 0 0 1 2.3 0M5.5 6.15a1.15 1.15 0 1 0 0-2.3a1.15 1.15 0 0 0 0 2.3M11.65 8a1.15 1.15 0 1 1-2.3 0a1.15 1.15 0 0 1 2.3 0M5.5 9.15a1.15 1.15 0 1 0 0-2.3a1.15 1.15 0 0 0 0 2.3" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiDice6Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
