import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCoordinateSystemIcon],svg[tdesign-coordinate-system-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l11.258 19.5H.74zM4.204 18.5h15.589L11.999 5zM13 9v3.532l3.408 2.84l-1.28 1.536l-3.129-2.606l-3.128 2.606l-1.28-1.536L11 12.532V9z"></svg:path>`,
})
export class TdesignCoordinateSystemIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
