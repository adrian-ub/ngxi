import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronCircleDown48FilledIcon],svg[fluent-chevron-circle-down-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m-8.616-23.634L24 28.982l8.616-8.616a1.25 1.25 0 0 1 1.768 1.768l-9.5 9.5a1.25 1.25 0 0 1-1.768 0l-9.5-9.5a1.25 1.25 0 0 1 1.768-1.768"></svg:path>`,
})
export class FluentChevronCircleDown48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
