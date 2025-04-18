import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riEraserFillIcon],svg[ri-eraser-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 18.997h7v2h-9l-3.998.002l-6.487-6.488a1 1 0 0 1 0-1.414L12.12 2.491a1 1 0 0 1 1.414 0l7.779 7.778a1 1 0 0 1 0 1.414zm1.657-4.486l3.535-3.535l-6.364-6.364l-3.535 3.535z"></svg:path>`,
})
export class RiEraserFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
