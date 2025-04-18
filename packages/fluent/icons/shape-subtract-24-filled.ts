import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShapeSubtract24FilledIcon],svg[fluent-shape-subtract-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2.905A3.24 3.24 0 0 0 2 5.25v8q0 .15.013.297a3.2 3.2 0 0 0 .542 1.52A3.25 3.25 0 0 0 5.25 16.5H7.5v2.25A3.25 3.25 0 0 0 10.75 22h8A3.25 3.25 0 0 0 22 18.75v-8a3.25 3.25 0 0 0-3.25-3.25H16.5V5.25A3.25 3.25 0 0 0 13.25 2h-8A3.24 3.24 0 0 0 3 2.905m6 7.845C9 9.784 9.784 9 10.75 9h8c.966 0 1.75.784 1.75 1.75v8a1.75 1.75 0 0 1-1.75 1.75h-8A1.75 1.75 0 0 1 9 18.75z"></svg:path>`,
})
export class FluentShapeSubtract24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
