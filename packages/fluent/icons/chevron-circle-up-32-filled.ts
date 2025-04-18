import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronCircleUp32FilledIcon],svg[fluent-chevron-circle-up-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14s-6.268 14-14 14M9.293 17.293a1 1 0 1 0 1.414 1.414L16 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414l-5.878-5.879l-.033-.028l-.08-.073A1 1 0 0 0 16 11.02c-.26-.003-.484.097-.718.293c-.05.041-.06.05-.11.1v.002z"></svg:path>`,
})
export class FluentChevronCircleUp32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
