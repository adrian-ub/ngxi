import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsEraserIcon],svg[majesticons-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.121 17.85a3 3 0 0 1 0-4.243l7.071-7.072l8.486 8.486l-3.243 3.242H20a1 1 0 1 1 0 2H6.778a3 3 0 0 1-2.121-.878L3.12 17.849zm16.97-4.243l1.415-1.415a3 3 0 0 0 0-4.242l-4.243-4.243a3 3 0 0 0-4.242 0l-1.414 1.414z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsEraserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
