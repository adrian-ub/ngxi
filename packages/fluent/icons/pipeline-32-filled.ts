import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPipeline32FilledIcon],svg[fluent-pipeline-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8a2 2 0 1 1 4 0v16a2 2 0 1 1-4 0zm24 0a2 2 0 1 1 4 0v16a2 2 0 1 1-4 0zm-2 1H8v14h16z"></svg:path>`,
})
export class FluentPipeline32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
