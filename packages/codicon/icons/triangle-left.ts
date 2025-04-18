import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconTriangleLeftIcon],svg[codicon-triangle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.44 2l.56.413v11.194l-.54.393L5 8.373v-.827z"></svg:path>`,
})
export class CodiconTriangleLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
