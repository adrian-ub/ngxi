import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhForwardIcon],svg[whh-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1009.62 550l-435 463q-25 27-62-13V24q37-40 62-13l435 463q15 16 15 38.5t-15 37.5m-947 463q-25 27-62-13V24q37-40 62-13l435 463q15 16 15 38.5t-15 37.5z"></svg:path>`,
})
export class WhhForwardIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
