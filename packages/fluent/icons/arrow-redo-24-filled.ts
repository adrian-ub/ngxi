import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowRedo24FilledIcon],svg[fluent-arrow-redo-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 7.586l-3.64-3.635a6.66 6.66 0 1 0-9.42 9.42l8.339 8.337a1 1 0 0 0 1.414-1.415l-8.339-8.336A4.66 4.66 0 0 1 12.771 5.2l.174.166l3.64 3.633H12a1 1 0 0 0-.993.884L11 10a1 1 0 0 0 .883.993l.117.006h7a1 1 0 0 0 .993-.883L20 10V3.002a1 1 0 0 0-1.993-.116L18 3.002zl-3.64-3.635z"></svg:path>`,
})
export class FluentArrowRedo24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
