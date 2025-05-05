import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBeerIcon],svg[picon-beer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v5h1V2m1 0v5h1V2m1 1v2h1V3M0 8l1-2V0h1q2 3 3 0h1v2c3-1 3 5 0 4l1 2"></svg:path>`,
})
export class PiconBeerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
