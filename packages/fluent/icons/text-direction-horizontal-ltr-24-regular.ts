import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDirectionHorizontalLtr24RegularIcon],svg[fluent-text-direction-horizontal-ltr-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.053 12.97l3.753-9.496a.75.75 0 0 1 1.345-.104l.05.105l3.747 9.5a.75.75 0 0 1-1.352.643l-.043-.092L9.556 11H5.443l-.995 2.52a.75.75 0 0 1-.876.454l-.098-.031a.75.75 0 0 1-.452-.876zm4.45-7.178L6.036 9.5h2.928zM12 7.75c0 .414.336.75.75.75h5.69l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.72.72h-5.69a.75.75 0 0 0-.75.75m-9 9.5c0 .414.336.75.75.75h14.69l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.72.72H3.75a.75.75 0 0 0-.75.75"></svg:path>`,
})
export class FluentTextDirectionHorizontalLtr24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
