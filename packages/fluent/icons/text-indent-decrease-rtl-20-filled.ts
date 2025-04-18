import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextIndentDecreaseRtl20FilledIcon],svg[fluent-text-indent-decrease-rtl-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.25 4a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5zM14 9.75a.75.75 0 0 0-.75-.75H2.75a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 .75-.75m0 5a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 .75-.75m1.22-7.03a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.97-.97l-.97-.97a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class FluentTextIndentDecreaseRtl20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
