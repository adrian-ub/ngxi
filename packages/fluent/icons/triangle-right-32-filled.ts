import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTriangleRight32FilledIcon],svg[fluent-triangle-right-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.317 18.846c2.242-1.235 2.242-4.457 0-5.693L7.82 2.403C5.653 1.21 3 2.777 3 5.25v21.492c0 2.473 2.652 4.04 4.818 2.846z"></svg:path>`,
})
export class FluentTriangleRight32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
