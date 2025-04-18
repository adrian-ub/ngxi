import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoMinusIcon],svg[entypo-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10c0 .553-.048 1-.601 1H4.601C4.049 11 4 10.553 4 10s.049-1 .601-1H15.4c.552 0 .6.447.6 1"></svg:path>`,
})
export class EntypoMinusIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
