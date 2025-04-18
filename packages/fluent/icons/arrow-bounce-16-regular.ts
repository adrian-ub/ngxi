import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowBounce16RegularIcon],svg[fluent-arrow-bounce-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0V5.707l6.397 6.397a.5.5 0 0 0 .707 0l5.75-5.75a.5.5 0 0 0-.708-.707L8.75 11.043L2.707 5H7.5a.5.5 0 0 0 .5-.5"></svg:path>`,
})
export class FluentArrowBounce16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
