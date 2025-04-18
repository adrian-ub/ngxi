import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataUsage24FilledIcon],svg[fluent-data-usage-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.25 2.996A2.75 2.75 0 0 1 21 5.746v12.5a2.75 2.75 0 0 1-2.75 2.75H5.75A2.75 2.75 0 0 1 3 18.246v-12.5a2.75 2.75 0 0 1 2.75-2.75zM7.75 9a.75.75 0 0 0-.75.747v6.507c0 .412.336.746.75.746s.75-.334.75-.746V9.746A.75.75 0 0 0 7.75 9m8.5-2a.74.74 0 0 0-.75.73v8.541c0 .403.336.73.75.73a.74.74 0 0 0 .75-.73V7.729a.74.74 0 0 0-.75-.73m-4.275 4.997a.73.73 0 0 0-.725.734l.035 3.547a.73.73 0 0 0 .74.72a.73.73 0 0 0 .725-.734l-.035-3.548a.73.73 0 0 0-.74-.719"></svg:path>`,
})
export class FluentDataUsage24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
