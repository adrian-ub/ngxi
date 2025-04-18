import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowAutofitWidthDotted24FilledIcon],svg[fluent-arrow-autofit-width-dotted-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.008 6.5a2.5 2.5 0 0 0-2.5-2.5h-11a2.5 2.5 0 0 0-2.5 2.5v4a1 1 0 1 0 2 0v-4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v4a1 1 0 1 0 2 0zm-1.8 13.207l2.5-2.5a1 1 0 0 0 0-1.414l-2.5-2.5a1 1 0 0 0-1.415 1.414l1.793 1.793l-1.793 1.793a1 1 0 0 0 1.414 1.414M3.292 15.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 1.414-1.414L5.414 16.5l1.793-1.793a1 1 0 1 0-1.414-1.414zM13 16.5a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-4-1a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zm8 1a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1"></svg:path>`,
})
export class FluentArrowAutofitWidthDotted24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
