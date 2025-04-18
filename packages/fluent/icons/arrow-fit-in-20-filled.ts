import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowFitIn20FilledIcon],svg[fluent-arrow-fit-in-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.21 7.781A.75.75 0 1 1 6.27 6.72l2.51 2.5a.75.75 0 0 1 0 1.061l-2.5 2.5a.75.75 0 0 1-1.06-1.06l1.22-1.22H2.75a.75.75 0 0 1 0-1.5h3.684zm9.58 0a.75.75 0 0 0-1.06-1.062l-2.51 2.5a.75.75 0 0 0 0 1.061l2.5 2.5a.75.75 0 1 0 1.06-1.06l-1.22-1.22h3.69a.75.75 0 0 0 0-1.5h-3.684z"></svg:path>`,
})
export class FluentArrowFitIn20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
