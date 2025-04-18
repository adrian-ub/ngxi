import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutRowTwoSplitBottom24RegularIcon],svg[fluent-layout-row-two-split-bottom-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75zM6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v5h15v-5a1.75 1.75 0 0 0-1.75-1.75zm13.25 8.25h-6.75v6.75h5a1.75 1.75 0 0 0 1.75-1.75zm-8.25 0H4.5v5c0 .966.784 1.75 1.75 1.75h5z"></svg:path>`,
})
export class FluentLayoutRowTwoSplitBottom24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
