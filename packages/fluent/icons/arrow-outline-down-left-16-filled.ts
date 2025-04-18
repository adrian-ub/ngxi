import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowOutlineDownLeft16FilledIcon],svg[fluent-arrow-outline-down-left-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.151 1.44a1.5 1.5 0 0 0-2.121 0L5.004 5.464L3.907 4.368c-.75-.75-2.033-.285-2.13.77l-.772 8.5a1.25 1.25 0 0 0 1.358 1.358l8.499-.773c1.055-.096 1.52-1.379.77-2.128l-1.098-1.099L14.56 6.97a1.5 1.5 0 0 0 0-2.121z"></svg:path>`,
})
export class FluentArrowOutlineDownLeft16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
