import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconIcecreamIcon],svg[picon-icecream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 4Q9 3 6 2c1-2-5-2-4 0q-3 1 .5 2L4 8M3 4h2L4 7"></svg:path>`,
})
export class PiconIcecreamIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
