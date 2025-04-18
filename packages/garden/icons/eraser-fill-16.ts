import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenEraserFill16Icon],svg[garden-eraser-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" d="M8.5 15.5h7"></svg:path><svg:path fill="currentColor" d="M4.79 5.5L.5 9.79a.996.996 0 0 0 0 1.41l4.29 4.29c.19.2.45.29.71.29s.51-.1.71-.29l4.29-4.29zm10.71-.71L11.21.5A.996.996 0 0 0 9.8.5L5.5 4.79l5.71 5.71l4.29-4.29c.39-.39.39-1.03 0-1.42"></svg:path>`,
})
export class GardenEraserFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
