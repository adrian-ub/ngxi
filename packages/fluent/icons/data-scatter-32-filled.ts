import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataScatter32FilledIcon],svg[fluent-data-scatter-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.25 3c.69 0 1.25.56 1.25 1.25v20.5c0 .966.784 1.75 1.75 1.75h20.5a1.25 1.25 0 1 1 0 2.5H7.25A4.25 4.25 0 0 1 3 24.75V4.25C3 3.56 3.56 3 4.25 3M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8m7 1a4 4 0 1 1 8 0a4 4 0 0 1-8 0m1 7a4 4 0 1 0 0 8a4 4 0 0 0 0-8"></svg:path>`,
})
export class FluentDataScatter32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
