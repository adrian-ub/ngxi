import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxLoaderCircleIcon],svg[bx-loader-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="20" r="2" fill="currentColor"></svg:circle><svg:circle cx="12" cy="4" r="2" fill="currentColor"></svg:circle><svg:circle cx="6.343" cy="17.657" r="2" fill="currentColor"></svg:circle><svg:circle cx="17.657" cy="6.343" r="2" fill="currentColor"></svg:circle><svg:circle cx="4" cy="12" r="2.001" fill="currentColor"></svg:circle><svg:circle cx="20" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="6.343" cy="6.344" r="2" fill="currentColor"></svg:circle><svg:circle cx="17.657" cy="17.658" r="2" fill="currentColor"></svg:circle>`,
})
export class BxLoaderCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
