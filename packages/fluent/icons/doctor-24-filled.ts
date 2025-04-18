import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDoctor24FilledIcon],svg[fluent-doctor-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3.25A1.75 1.75 0 0 0 8.25 5v3.25H5A1.75 1.75 0 0 0 3.25 10v4c0 .966.784 1.75 1.75 1.75h3.25V19c0 .966.784 1.75 1.75 1.75h4A1.75 1.75 0 0 0 15.75 19v-3.25H19A1.75 1.75 0 0 0 20.75 14v-4A1.75 1.75 0 0 0 19 8.25h-3.25V5A1.75 1.75 0 0 0 14 3.25z"></svg:path>`,
})
export class FluentDoctor24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
