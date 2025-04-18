import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonXIcon],svg[carbon-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 9h-2l-2 6l-2-6h-2l2.75 7L12 23h2l2-6l2 6h2l-2.75-7L20 9z" fill="currentColor"></svg:path>`,
})
export class CarbonXIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
