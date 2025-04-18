import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowAutofitHeightDotted24FilledIcon],svg[fluent-arrow-autofit-height-dotted-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.207 3.293a1 1 0 0 0-1.414 0l-2.5 2.5a1 1 0 0 0 1.414 1.414L16.5 5.414l1.793 1.793a1 1 0 1 0 1.414-1.414zm-10.707.7a2.5 2.5 0 0 0-2.5 2.5v11a2.5 2.5 0 0 0 2.5 2.5h4a1 1 0 1 0 0-2h-4a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5h4a1 1 0 1 0 0-2zm10.707 16.714l2.5-2.5a1 1 0 0 0-1.414-1.414L16.5 18.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0M17.5 12a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-1 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m0-7a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1"></svg:path>`,
})
export class FluentArrowAutofitHeightDotted24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
