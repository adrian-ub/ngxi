import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowAutofitHeightDotted20FilledIcon],svg[fluent-arrow-autofit-height-dotted-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.712 5.233L14.251 3.72L12.79 5.233a.75.75 0 0 1-1.08-1.042l1.821-1.886a1 1 0 0 1 1.44 0l1.82 1.886a.75.75 0 0 1-1.079 1.042m0 9.534l-1.461 1.513l-1.461-1.513a.75.75 0 0 0-1.08 1.042l1.821 1.886a1 1 0 0 0 1.44 0l1.82-1.886a.75.75 0 0 0-1.079-1.042M14.252 12a.75.75 0 0 1 .75.75v.5a.75.75 0 1 1-1.5 0v-.5a.75.75 0 0 1 .75-.75m.75-1.75a.75.75 0 1 1-1.5 0v-.5a.75.75 0 0 1 1.5 0zM14.253 8a.75.75 0 0 0 .75-.75v-.5a.75.75 0 1 0-1.5 0v.5c0 .414.336.75.75.75M5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4.25a.75.75 0 0 0 0-1.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h4.25a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentArrowAutofitHeightDotted20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
