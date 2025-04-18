import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArchiveArrowBack32FilledIcon],svg[fluent-archive-arrow-back-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm1 6h24v4.515A8.96 8.96 0 0 0 23 14a9 9 0 0 0-3.107.55A1 1 0 0 0 19 14h-6a1 1 0 1 0 0 2h4.343A8.98 8.98 0 0 0 14 23c0 2.305.867 4.408 2.292 6H9.5A5.5 5.5 0 0 1 4 23.5zm19 19.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m-1.22-10.22l-1.22 1.22h2.69a4.25 4.25 0 0 1 4.25 4.25v.5a.75.75 0 0 1-1.5 0v-.5A2.75 2.75 0 0 0 23.25 23h-2.69l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 1 1 1.06 1.06"></svg:path>`,
})
export class FluentArchiveArrowBack32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
