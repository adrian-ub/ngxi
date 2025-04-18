import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlipHorizontal24RegularIcon],svg[fluent-flip-horizontal-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.88 19.656a.75.75 0 0 1-.63.344h-7.5a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.433-.31l7.5 16.5a.75.75 0 0 1-.052.716M14.5 6.213V18.5h5.585zM2.5 20a.5.5 0 0 1-.452-.713l8-17A.5.5 0 0 1 11 2.5v17a.5.5 0 0 1-.5.5z"></svg:path>`,
})
export class FluentFlipHorizontal24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
