import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownloadOff24FilledIcon],svg[fluent-arrow-download-off-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 12.06v3.026l-3.293-3.293a1 1 0 0 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l2.22-2.22L18.939 20H5a1 1 0 1 0 0 2h14a1 1 0 0 0 .998-.94l.721.72a.75.75 0 0 0 1.061-1.06L3.28 2.22a.75.75 0 1 0-1.06 1.06zm2.512 2.513l-.512.513V14.06zm3.536-.707l-1.414-1.414l.659-.66a1 1 0 0 1 1.414 1.415zM11 7.818l2 2V3a1 1 0 1 0-2 0z"></svg:path>`,
})
export class FluentArrowDownloadOff24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
