import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPipeline24FilledIcon],svg[fluent-pipeline-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6a2 2 0 1 1 4 0v11a2 2 0 1 1-4 0zm16 0a2 2 0 1 1 4 0v11a2 2 0 1 1-4 0zm-1.5 0h-9v11h9z"></svg:path>`,
})
export class FluentPipeline24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
