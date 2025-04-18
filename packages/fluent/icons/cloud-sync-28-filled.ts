import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloudSync28FilledIcon],svg[fluent-cloud-sync-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3a7 7 0 0 0-6.931 6.017A5.5 5.5 0 0 0 7.5 20h4.516a7.5 7.5 0 0 1 13.878-4.422Q26 15.055 26 14.5a5.5 5.5 0 0 0-5.069-5.483A7 7 0 0 0 14 3m-1 16.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0m5.349-4.08A4 4 0 0 1 23 17.313V16.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.727a2.998 2.998 0 0 0-4.848-.871a.5.5 0 0 1-.707-.707a4 4 0 0 1 1.677-1.003m2.302 8.16A4 4 0 0 1 16 21.687v.814a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-.727a2.998 2.998 0 0 0 4.848.871a.5.5 0 0 1 .707.707a4 4 0 0 1-1.677 1.003"></svg:path>`,
})
export class FluentCloudSync28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
