import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownloadOff28RegularIcon],svg[fluent-arrow-download-off-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l11.03 11.03v4.13l-4.97-4.97a.75.75 0 0 0-1.06 1.06l6.25 6.25a.75.75 0 0 0 1.06 0l2.595-2.594l5.347 5.347a.8.8 0 0 0-.222-.034H5.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 .717-.971l1.752 1.753a.75.75 0 0 0 1.061-1.061zm12.784 14.905L14.75 18.44v-2.628zm-2.814-7.057l1.5 1.5V3.75a.75.75 0 0 0-1.5 0zm5.996 5.996l-1.06-1.06l1.534-1.534a.75.75 0 1 1 1.06 1.06z"></svg:path>`,
})
export class FluentArrowDownloadOff28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
