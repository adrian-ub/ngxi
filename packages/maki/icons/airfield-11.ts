import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiAirfield11Icon],svg[maki-airfield-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5 .5H3.5C3 .5 3 0 3.5 0h4c.5 0 .5.5 0 .5H6s.5.5.5 1.5v1H11v1.5l-4.5 2L6 10l1.5.5v.5h-4v-.5L5 10l-.5-3.5l-4.5-2V3h4.5V2C4.5 1 5 .5 5 .5z" fill="currentColor"></svg:path>`,
})
export class MakiAirfield11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
