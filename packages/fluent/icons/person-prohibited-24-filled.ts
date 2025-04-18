import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonProhibited24FilledIcon],svg[fluent-person-prohibited-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m-5.477 2A6.47 6.47 0 0 0 11 17.5c0 1.644.61 3.145 1.617 4.29A15 15 0 0 1 10 22c-2.89 0-5.128-.656-6.69-2a3.75 3.75 0 0 1-1.306-2.844v-.907A2.25 2.25 0 0 1 4.254 14zm8.787 1.253l-5.557 5.557a4 4 0 0 0 5.557-5.557M17.5 13.5a4 4 0 0 0-3.309 6.248l5.557-5.557a4 4 0 0 0-2.248-.69M10 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10"></svg:path>`,
})
export class FluentPersonProhibited24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
