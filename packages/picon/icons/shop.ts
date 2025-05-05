import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconShopIcon],svg[picon-shop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1.5V1h4v.5M2 5v2h2V5M1 8V5H0l2-3h4l2 3H7v3H6V5H5v3"></svg:path>`,
})
export class PiconShopIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
