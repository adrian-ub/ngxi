import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonProductIcon],svg[carbon-product-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18h6v2H8zm0 4h10v2H8z"></svg:path><svg:path fill="currentColor" d="M26 4H6a2.003 2.003 0 0 0-2 2v20a2.003 2.003 0 0 0 2 2h20a2.003 2.003 0 0 0 2-2V6a2.003 2.003 0 0 0-2-2m-8 2v4h-4V6ZM6 26V6h6v6h8V6h6l.001 20Z"></svg:path>`,
})
export class CarbonProductIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
