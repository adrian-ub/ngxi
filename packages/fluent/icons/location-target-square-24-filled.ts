import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLocationTargetSquare24FilledIcon],svg[fluent-location-target-square-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM9 12a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-1.438-.75a4.5 4.5 0 0 1 3.688-3.688V6.75a.75.75 0 0 1 1.5 0v.812a4.5 4.5 0 0 1 3.688 3.688h.812a.75.75 0 0 1 0 1.5h-.812a4.5 4.5 0 0 1-3.688 3.688v.812a.75.75 0 0 1-1.5 0v-.812a4.5 4.5 0 0 1-3.688-3.688H6.75a.75.75 0 0 1 0-1.5zM13.5 12a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0"></svg:path>`,
})
export class FluentLocationTargetSquare24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
