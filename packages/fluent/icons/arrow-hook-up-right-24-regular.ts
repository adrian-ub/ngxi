import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowHookUpRight24RegularIcon],svg[fluent-arrow-hook-up-right-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 18.5h5.75a.75.75 0 0 1 0 1.5H10.5a6.5 6.5 0 1 1 0-13h5.95l-2.616-2.617a.75.75 0 0 1 1.06-1.06l3.882 3.882c.1.1.166.22.198.348a.75.75 0 0 1-.205.739l-3.88 3.88a.75.75 0 1 1-1.06-1.061l2.61-2.611H10.5a5 5 0 0 0 0 10"></svg:path>`,
})
export class FluentArrowHookUpRight24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
