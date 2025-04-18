import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextIndentIncreaseRtl20FilledIcon],svg[fluent-text-indent-increase-rtl-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.75a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 .75-.75M13.25 9a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5zm0 5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5zm3.72-6.28a.75.75 0 1 1 1.06 1.06l-.97.97l.97.97a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06z"></svg:path>`,
})
export class FluentTextIndentIncreaseRtl20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
