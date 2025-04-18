import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riProductHuntLineIcon],svg[ri-product-hunt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1.334-8a1.5 1.5 0 0 0 0-3H10.5v3zm0-5a3.5 3.5 0 1 1 0 7H10.5v3h-2V7z"></svg:path>`,
})
export class RiProductHuntLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
