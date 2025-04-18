import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloudArchive28FilledIcon],svg[fluent-cloud-archive-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4a7 7 0 0 0-6.931 6.017A5.5 5.5 0 0 0 7.5 21H14v-3.268A2 2 0 0 1 13 16v-1a2 2 0 0 1 2-2h10.4a5.5 5.5 0 0 0-4.469-2.983A7 7 0 0 0 14 4m1 10a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zm0 4h11v5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3zm7.5 2h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1"></svg:path>`,
})
export class FluentCloudArchive28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
