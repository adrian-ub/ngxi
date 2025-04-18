import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxPyramidIcon],svg[bx-pyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.445 21.832a1 1 0 0 0 1.11 0l9-6A1 1 0 0 0 21.8 14.4l-9-12c-.377-.504-1.223-.504-1.6 0l-9 12a1 1 0 0 0 .245 1.432zM13 19.131V6l6.565 8.754zM11 6v13.131l-6.565-4.377z"></svg:path>`,
})
export class BxPyramidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
