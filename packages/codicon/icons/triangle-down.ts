import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconTriangleDownIcon],svg[codicon-triangle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.56L2.413 5h11.194l.393.54L8.373 11h-.827z"></svg:path>`,
})
export class CodiconTriangleDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
