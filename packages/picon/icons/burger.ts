import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBurgerIcon],svg[picon-burger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5V4h8v1M0 3c0-4 8-4 8 0M0 6c0 3 8 3 8 0"></svg:path>`,
})
export class PiconBurgerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
