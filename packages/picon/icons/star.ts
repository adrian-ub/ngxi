import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconStarIcon],svg[picon-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2h8L4 5M1 7l3-7l3 7l-3-2"></svg:path>`,
})
export class PiconStarIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
