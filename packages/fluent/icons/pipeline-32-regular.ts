import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPipeline32RegularIcon],svg[fluent-pipeline-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9a3 3 0 0 1 6 0h16a3 3 0 1 1 6 0v14a3 3 0 1 1-6 0H8a3 3 0 1 1-6 0zm4 0a1 1 0 0 0-2 0v14a1 1 0 1 0 2 0zm2 12h16V11H8zM28 9a1 1 0 1 0-2 0v14a1 1 0 1 0 2 0z"></svg:path>`,
})
export class FluentPipeline32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
