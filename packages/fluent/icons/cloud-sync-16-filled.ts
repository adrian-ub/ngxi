import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloudSync16FilledIcon],svg[fluent-cloud-sync-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.03 5.507a4 4 0 0 1 7.887-.323A5.5 5.5 0 0 0 5.207 12H4.25a3.25 3.25 0 0 1-.22-6.493M10.5 15a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9M13 8v1.5a.5.5 0 0 1-.5.5H11a.5.5 0 0 1 0-1h.47a1.996 1.996 0 0 0-2.57.55a.5.5 0 0 1-.8-.6a2.996 2.996 0 0 1 3.9-.8V8a.5.5 0 0 1 1 0m-4.5 5.5A.5.5 0 0 1 8 13v-1.5a.5.5 0 0 1 .5-.5H10a.5.5 0 0 1 0 1h-.47a1.996 1.996 0 0 0 2.57-.55a.5.5 0 1 1 .8.6a2.996 2.996 0 0 1-3.9.799V13a.5.5 0 0 1-.5.5"></svg:path>`,
})
export class FluentCloudSync16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
