import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpload24FilledIcon],svg[fluent-arrow-upload-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 2a1 1 0 0 0 0 2h13a1 1 0 1 0 0-2zm7.207 3.793a1 1 0 0 0-1.414 0l-5 5a1 1 0 1 0 1.414 1.414L11 8.914V21a1 1 0 1 0 2 0V8.914l3.293 3.293a1 1 0 0 0 1.414-1.414z"></svg:path>`,
})
export class FluentArrowUpload24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
