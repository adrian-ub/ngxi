import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentImageMultiple32FilledIcon],svg[fluent-image-multiple-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3a4 4 0 0 0-4 4v14c0 .745.204 1.443.559 2.04l8.834-8.392a2.333 2.333 0 0 1 3.214 0l8.834 8.392A4 4 0 0 0 25 21V7a4 4 0 0 0-4-4zm16.023 21.451l-8.793-8.353a.333.333 0 0 0-.46 0L4.977 24.45A4 4 0 0 0 7 25h14c.738 0 1.43-.2 2.023-.549M20 10.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-9.5 18a4 4 0 0 1-3.465-2H21a5.5 5.5 0 0 0 5.5-5.5V7.035c1.196.692 2 1.984 2 3.465V21a7.5 7.5 0 0 1-7.5 7.5z"></svg:path>`,
})
export class FluentImageMultiple32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
