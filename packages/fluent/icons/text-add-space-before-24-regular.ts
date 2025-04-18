import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextAddSpaceBefore24RegularIcon],svg[fluent-text-add-space-before-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.47 6.28a.75.75 0 0 1 1.06-1.06L12 6.69l1.47-1.47a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0zM3 11.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75m0 6a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class FluentTextAddSpaceBefore24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
