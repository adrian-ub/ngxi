import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHexagon32FilledIcon],svg[fluent-hexagon-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.617 3a3 3 0 0 0-2.559 1.433l-6.123 10a3 3 0 0 0 0 3.134l6.123 10A3 3 0 0 0 10.617 29h10.758a3 3 0 0 0 2.56-1.434l6.119-10a3 3 0 0 0 0-3.132l-6.12-10A3 3 0 0 0 21.375 3z"></svg:path>`,
})
export class FluentHexagon32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
