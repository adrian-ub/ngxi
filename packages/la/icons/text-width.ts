import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laTextWidthIcon],svg[la-text-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6v2h7v14h2V8h7V6zm2 15.5L5.625 25L10 28.5V26h12v2.5l4.375-3.5L22 21.5V24H10z"></svg:path>`,
})
export class LaTextWidthIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
