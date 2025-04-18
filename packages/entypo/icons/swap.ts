import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoSwapIcon],svg[entypo-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5H4V3L0 6.5L4 10V8h10zm6 8.5L16 10v2H6v3h10v2z"></svg:path>`,
})
export class EntypoSwapIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
