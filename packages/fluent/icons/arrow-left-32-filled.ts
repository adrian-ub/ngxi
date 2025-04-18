import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowLeft32FilledIcon],svg[fluent-arrow-left-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 16c0 .69-.56 1.25-1.25 1.25H7.213l7.432 7.628a1.25 1.25 0 1 1-1.79 1.744l-9.497-9.747a1.246 1.246 0 0 1 0-1.75l9.497-9.747a1.25 1.25 0 0 1 1.79 1.744L7.213 14.75H27.75c.69 0 1.25.56 1.25 1.25"></svg:path>`,
})
export class FluentArrowLeft32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
