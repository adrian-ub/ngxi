import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalligraphyPen24FilledIcon],svg[fluent-calligraphy-pen-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.75a.75.75 0 0 0-1.5 0v3a1.75 1.75 0 0 0 1.543 1.738L6.527 9.993a3.87 3.87 0 0 0 .119 3.143l3.99 7.95c.149.298.363.535.614.693V12.3a1.5 1.5 0 1 1 1.5 0v9.48c.251-.158.465-.395.615-.692l3.99-7.951c.481-.96.526-2.137.118-3.143l-1.016-2.505A1.75 1.75 0 0 0 18 5.75v-3a.75.75 0 0 0-1.5 0v3a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25z"></svg:path>`,
})
export class FluentCalligraphyPen24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
