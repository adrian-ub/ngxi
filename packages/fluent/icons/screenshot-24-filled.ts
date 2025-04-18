import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentScreenshot24FilledIcon],svg[fluent-screenshot-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM8 7.5a.5.5 0 0 0-.5.5v2.25a.75.75 0 0 1-1.5 0V8a2 2 0 0 1 2-2h2.25a.75.75 0 0 1 0 1.5zM7.5 16a.5.5 0 0 0 .5.5h2.25a.75.75 0 0 1 0 1.5H8a2 2 0 0 1-2-2v-2.25a.75.75 0 0 1 1.5 0zM16 7.5h-2.25a.75.75 0 0 1 0-1.5H16a2 2 0 0 1 2 2v2.25a.75.75 0 0 1-1.5 0V8a.5.5 0 0 0-.5-.5m.5 8.5v-2.25a.75.75 0 0 1 1.5 0V16a2 2 0 0 1-2 2h-2.25a.75.75 0 0 1 0-1.5H16a.5.5 0 0 0 .5-.5"></svg:path>`,
})
export class FluentScreenshot24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
