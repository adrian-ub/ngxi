import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloudArchive24FilledIcon],svg[fluent-cloud-archive-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.08 9.02a6.001 6.001 0 0 1 11.84 0A4.5 4.5 0 0 1 21.744 12H13a2 2 0 0 0-2 2v1a2 2 0 0 0 1 1.732V18H6.5a4.5 4.5 0 0 1-.42-8.98M13 13a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zm9 4h-9v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2zm-6.5 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class FluentCloudArchive24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
