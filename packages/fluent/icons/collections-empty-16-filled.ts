import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCollectionsEmpty16FilledIcon],svg[fluent-collections-empty-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.854 2.121a2.5 2.5 0 0 0-1.768 3.062L2.12 9.047A2.5 2.5 0 0 0 5 10.857V8a3 3 0 0 1 3-3h2.354L9.78 2.854a2.5 2.5 0 0 0-3.062-1.768zM6 8a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"></svg:path>`,
})
export class FluentCollectionsEmpty16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
