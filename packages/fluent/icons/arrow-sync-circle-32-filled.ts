import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowSyncCircle32FilledIcon],svg[fluent-arrow-sync-circle-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2S2 8.268 2 16s6.268 14 14 14m8-19v4a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h1.584a5 5 0 0 0-8.311-1.333a1 1 0 1 1-1.49-1.334A7 7 0 0 1 16 9a7 7 0 0 1 6 3.392V11a1 1 0 1 1 2 0M9 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1.584a5 5 0 0 0 8.311 1.333a1 1 0 1 1 1.49 1.334A7 7 0 0 1 16 23a7 7 0 0 1-6-3.392V21a1 1 0 0 1-1 1"></svg:path>`,
})
export class FluentArrowSyncCircle32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
