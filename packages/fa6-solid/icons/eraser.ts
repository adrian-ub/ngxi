import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidEraserIcon],svg[fa6-solid-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7l105.3.1h224c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9l130.7-130.7c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zm6.7 358.6H182.6l-80-80l124.7-124.7l137.4 137.4z"></svg:path>`,
})
export class Fa6SolidEraserIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
