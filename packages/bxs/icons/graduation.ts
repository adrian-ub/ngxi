import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsGraduationIcon],svg[bxs-graduation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v1l11 4l9-4V7L11 4z"></svg:path><svg:path fill="currentColor" d="M4 11v4.267c0 1.621 4.001 3.893 9 3.734c4-.126 6.586-1.972 7-3.467q.037-.133.037-.268V11L13 14l-5-1.667v3.213l-1-.364V12z"></svg:path>`,
})
export class BxsGraduationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
