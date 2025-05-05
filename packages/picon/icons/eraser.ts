import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconEraserIcon],svg[picon-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 5l2 2l2-1.5l-2-2M0 5l5-4l3 3l-5 4"></svg:path>`,
})
export class PiconEraserIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
