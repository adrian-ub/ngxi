import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalligraphyPen24RegularIcon],svg[fluent-calligraphy-pen-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.75a.75.75 0 0 0-1.5 0v3a1.75 1.75 0 0 0 1.543 1.738L6.527 9.993a3.87 3.87 0 0 0 .119 3.143l3.99 7.95c.283.566.803.914 1.364.914s1.08-.348 1.365-.913l3.99-7.951c.481-.96.526-2.137.118-3.143l-1.016-2.505A1.75 1.75 0 0 0 18 5.75v-3a.75.75 0 0 0-1.5 0v3a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25zm7.343 4.75l1.24 3.057c.247.61.217 1.336-.07 1.906l-3.263 6.504v-6.668a1.5 1.5 0 1 0-1.5 0v6.668l-3.264-6.504a2.37 2.37 0 0 1-.069-1.906L9.157 7.5z"></svg:path>`,
})
export class FluentCalligraphyPen24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
