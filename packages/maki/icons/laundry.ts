import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiLaundryIcon],svg[maki-laundry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1L6 3H3S2 3 2 4v9c0 1 1 1 1 1h9s1 0 1-1V2c0-1-1-1-1-1zm.5 1h2a.499.499 0 1 1 0 1h-2a.499.499 0 1 1 0-1m-1 4a3 3 0 1 1 0 6a3 3 0 0 1 0-6"></svg:path>`,
})
export class MakiLaundryIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
