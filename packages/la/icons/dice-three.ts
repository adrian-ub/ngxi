import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laDiceThreeIcon],svg[la-dice-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm4 2a2 2 0 0 0 0 4a2 2 0 0 0 0-4m5 5a2 2 0 0 0 0 4a2 2 0 0 0 0-4m5 5a2 2 0 0 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class LaDiceThreeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
