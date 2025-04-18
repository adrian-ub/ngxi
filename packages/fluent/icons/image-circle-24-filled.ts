import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentImageCircle24FilledIcon],svg[fluent-image-circle-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.564 18.542A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 2.501.918 4.788 2.436 6.542l5.983-5.909a2.25 2.25 0 0 1 3.162 0zM18.5 19.599l-5.973-5.898a.75.75 0 0 0-1.054 0L5.5 19.599A9.96 9.96 0 0 0 12 22a9.96 9.96 0 0 0 6.5-2.4m-1-11.1a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class FluentImageCircle24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
