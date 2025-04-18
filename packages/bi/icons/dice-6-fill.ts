import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biDice6FillIcon],svg[bi-dice-6-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm1 5.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m8 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m1.5 6.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M12 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M5.5 12a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M4 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class BiDice6FillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
