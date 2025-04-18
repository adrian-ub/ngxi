import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiWater11Icon],svg[maki-water-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5.5 11C3.59 11 2 9 2 7s2.61-5.81 3.5-7C6.39 1.19 9 5 9 7s-1.59 4-3.5 4z" fill="currentColor"></svg:path>`,
})
export class MakiWater11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
