import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iwwaMinusIcon],svg[iwwa-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m36.495 19.226l-32.99.024a.763.763 0 0 0 0 1.525l32.99-.023a.764.764 0 0 0 0-1.526"></svg:path>`,
})
export class IwwaMinusIcon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
