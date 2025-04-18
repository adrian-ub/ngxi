import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronDoubleDown20RegularIcon],svg[fluent-chevron-double-down-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.854 8.646a.5.5 0 0 1 .001.707l-5.465 5.484a.55.55 0 0 1-.78 0L4.147 9.353a.5.5 0 1 1 .708-.706L10 13.812l5.147-5.165a.5.5 0 0 1 .707-.001m0-4a.5.5 0 0 1 .001.707l-5.465 5.484a.55.55 0 0 1-.78 0L4.147 5.353a.5.5 0 1 1 .708-.706L10 9.812l5.147-5.165a.5.5 0 0 1 .707-.001"></svg:path>`,
})
export class FluentChevronDoubleDown20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
