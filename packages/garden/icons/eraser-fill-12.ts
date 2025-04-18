import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenEraserFill12Icon],svg[garden-eraser-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" d="M6.5 11.5h5"></svg:path><svg:path fill="currentColor" d="M3.45 4.34L.5 7.29a.996.996 0 0 0 0 1.41l2.79 2.79c.19.2.45.29.71.29s.51-.1.71-.29l2.95-2.95zm8.05-1.05L8.71.5A.996.996 0 0 0 7.3.5L4.34 3.45l4.21 4.21l2.95-2.95c.39-.39.39-1.03 0-1.42"></svg:path>`,
})
export class GardenEraserFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
