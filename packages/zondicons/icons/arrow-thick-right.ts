import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsArrowThickRightIcon],svg[zondicons-arrow-thick-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7H2v6h8v5l8-8l-8-8z"></svg:path>`,
})
export class ZondiconsArrowThickRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
