import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconTriangleRightIcon],svg[codicon-triangle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.56 14L5 13.587V2.393L5.54 2L11 7.627v.827z"></svg:path>`,
})
export class CodiconTriangleRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
