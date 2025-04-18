import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataLine32FilledIcon],svg[fluent-data-line-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9a4 4 0 1 1 3.08 3.894l-2.372 3.162a4 4 0 1 1-6.066 5.118l-4.651 1.55Q11 22.86 11 23a4 4 0 1 1-.642-2.174l4.651-1.55a4 4 0 0 1 4.91-4.17l2.373-3.162A4 4 0 0 1 21 9"></svg:path>`,
})
export class FluentDataLine32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
