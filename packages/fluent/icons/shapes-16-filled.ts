import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShapes16FilledIcon],svg[fluent-shapes-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5.5A4.5 4.5 0 0 1 9.973 5H8.5A3.5 3.5 0 0 0 5 8.5v1.473A4.5 4.5 0 0 1 1 5.5m7.5.5A2.5 2.5 0 0 0 6 8.5v4A2.5 2.5 0 0 0 8.5 15h4a2.5 2.5 0 0 0 2.5-2.5v-4A2.5 2.5 0 0 0 12.5 6z"></svg:path>`,
})
export class FluentShapes16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
