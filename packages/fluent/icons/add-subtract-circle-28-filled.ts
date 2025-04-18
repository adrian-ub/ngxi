import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAddSubtractCircle28FilledIcon],svg[fluent-add-subtract-circle-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.95 17.3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM14 26c6.627 0 12-5.373 12-12S20.627 2 14 2S2 7.373 2 14s5.373 12 12 12m0-1.5a10.46 10.46 0 0 1-6.876-2.564L21.936 7.124A10.46 10.46 0 0 1 24.5 14c0 5.799-4.701 10.5-10.5 10.5M7 10.25a.75.75 0 0 1 .75-.75h1.744L9.49 7.702a.75.75 0 1 1 1.5-.003l.004 1.801h1.756a.75.75 0 0 1 0 1.5h-1.753L11 12.749a.75.75 0 1 1-1.5.002L9.497 11H7.75a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class FluentAddSubtractCircle28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
