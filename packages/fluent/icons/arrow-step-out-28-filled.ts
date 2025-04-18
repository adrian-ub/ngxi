import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowStepOut28FilledIcon],svg[fluent-arrow-step-out-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 16.5a.75.75 0 0 0 .75-.75V4.622l3.957 4.146a.75.75 0 0 0 1.085-1.036l-5.25-5.5a.75.75 0 0 0-1.085 0l-5.25 5.5a.75.75 0 0 0 1.086 1.036l3.957-4.146V15.75c0 .414.336.75.75.75m0 9.5a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path>`,
})
export class FluentArrowStepOut28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
