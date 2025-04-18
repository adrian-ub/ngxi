import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowHookDownRight20RegularIcon],svg[fluent-arrow-hook-down-right-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9a5 5 0 0 1 5-5h4.5a.5.5 0 0 1 0 1H9a4 4 0 1 0 0 8h5.293l-2.7-2.7a.5.5 0 1 1 .708-.706l3.539 3.539a.5.5 0 0 1 .125.497a.5.5 0 0 1-.135.247l-3.533 3.533a.5.5 0 0 1-.707-.707L14.293 14H9a5 5 0 0 1-5-5"></svg:path>`,
})
export class FluentArrowHookDownRight20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
