import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsGraduationIcon],svg[bx-bxs-graduation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M2 7v1l11 4l9-4V7L11 4z" fill="currentColor"></svg:path><svg:path d="M4 11v4.267c0 1.621 4.001 3.893 9 3.734c4-.126 6.586-1.972 7-3.467c.024-.089.037-.178.037-.268V11L13 14l-5-1.667v3.213l-1-.364V12l-3-1z" fill="currentColor"></svg:path>`,
})
export class BxBxsGraduationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
