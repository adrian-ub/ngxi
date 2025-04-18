import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFoodOffIcon],svg[mdi-food-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.35 8.5L11 5h5V1h2v4h5l-1.38 13.79zM1 21v1c0 .55.45 1 1 1h13c.55 0 1-.45 1-1v-1zm20.9.9L2.1 2.1L.69 3.5l5.7 5.71C3.28 9.87 1 12 1 15h11.17l2 2H1v2h15v-.17l4.5 4.49z"></svg:path>`,
})
export class MdiFoodOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
