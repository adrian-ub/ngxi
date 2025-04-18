import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiStarIcon],svg[oi-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0L3 3H0l2.5 2l-1 3L4 6l2.5 2l-1-3L8 3H5z"></svg:path>`,
})
export class OiStarIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
