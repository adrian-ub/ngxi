import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGuitar24FilledIcon],svg[fluent-guitar-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.492 3.43l1.185-1.184a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1 0 1.414l-1.185 1.185zm-1.06 1.061l-3.821 3.82l-.16-.158a2.75 2.75 0 0 0-4.404.714l-.416.833a.61.61 0 0 1-.664.325l-.072-.015a4.71 4.71 0 0 0-4.69 1.792a6.03 6.03 0 0 0 .56 7.878l.599.598a6.03 6.03 0 0 0 7.878.56a4.71 4.71 0 0 0 1.792-4.69l-.015-.072a.61.61 0 0 1 .325-.663l.832-.416a2.75 2.75 0 0 0 .715-4.405l-.16-.159l3.821-3.82zm-7.993 10.07a1.5 1.5 0 1 1 2.122-2.122a1.5 1.5 0 0 1-2.122 2.121"></svg:path>`,
})
export class FluentGuitar24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
