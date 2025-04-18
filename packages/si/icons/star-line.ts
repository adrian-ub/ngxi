import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siStarLineIcon],svg[si-star-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m12 2l2.4 7.619l7.6-.005l-6.114 4.181l2.29 7.253L12 16.624l-6.181 4.424l2.29-7.253L2 9.615l7.595.004z"></svg:path>`,
})
export class SiStarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
