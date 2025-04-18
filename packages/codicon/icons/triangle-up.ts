import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconTriangleUpIcon],svg[codicon-triangle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 10.44l-.413.56H2.393L2 10.46L7.627 5h.827z"></svg:path>`,
})
export class CodiconTriangleUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
