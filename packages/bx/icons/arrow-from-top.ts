import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxArrowFromTopIcon],svg[bx-arrow-from-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4h12v2H6zm6 16.414l6.707-6.707l-1.414-1.414L13 16.586V8h-2v8.586l-4.293-4.293l-1.414 1.414z"></svg:path>`,
})
export class BxArrowFromTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
