import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAttach12FilledIcon],svg[fluent-attach-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.977 2.806a1.69 1.69 0 0 0-2.304.082L3.28 6.28a.75.75 0 1 1-1.06-1.06l3.392-3.392a3.192 3.192 0 1 1 4.458 4.569l-4.724 4.496A1.923 1.923 0 0 1 2.66 8.14l4.243-4.244a.75.75 0 1 1 1.06 1.061l-4.24 4.244a.423.423 0 0 0 .59.605L9.035 5.31a1.69 1.69 0 0 0-.058-2.504"></svg:path>`,
})
export class FluentAttach12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
