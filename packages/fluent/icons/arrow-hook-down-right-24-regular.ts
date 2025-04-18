import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowHookDownRight24RegularIcon],svg[fluent-arrow-hook-down-right-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 5.5H16A.75.75 0 0 0 16 4h-5.5a6.5 6.5 0 0 0 0 13h5.95l-2.616 2.617a.75.75 0 1 0 1.06 1.06l3.882-3.882c.1-.1.166-.22.198-.348a.75.75 0 0 0-.205-.739l-3.88-3.88a.75.75 0 1 0-1.06 1.061l2.61 2.611H10.5a5 5 0 0 1 0-10"></svg:path>`,
})
export class FluentArrowHookDownRight24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
