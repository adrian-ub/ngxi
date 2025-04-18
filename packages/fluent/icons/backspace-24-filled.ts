import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBackspace24FilledIcon],svg[fluent-backspace-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.75 4a3.25 3.25 0 0 1 3.245 3.066L22 7.25v9.5a3.25 3.25 0 0 1-3.066 3.245L18.75 20h-8.501a3.25 3.25 0 0 1-2.085-.756l-.155-.139l-4.995-4.75a3.25 3.25 0 0 1-.116-4.594l.116-.116l4.995-4.75a3.25 3.25 0 0 1 2.032-.888L10.25 4zm-7.304 4.397a.75.75 0 0 0-1.049 1.05l.073.083L12.94 12l-2.47 2.47l-.073.084a.75.75 0 0 0 1.05 1.049l.083-.073L14 13.061l2.47 2.47l.084.072a.75.75 0 0 0 1.049-1.05l-.073-.083L15.061 12l2.47-2.47l.072-.084a.75.75 0 0 0-1.05-1.049l-.083.073L14 10.939l-2.47-2.47z"></svg:path>`,
})
export class FluentBackspace24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
