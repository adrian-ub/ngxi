import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowSwap24RegularIcon],svg[fluent-arrow-swap-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.782 2.22l4.495 4.494a.75.75 0 0 1 .073.976l-.072.085l-4.495 4.504a.75.75 0 0 1-1.134-.975l.072-.084l3.217-3.223H5.242A.75.75 0 0 1 4.5 7.35l-.007-.101a.75.75 0 0 1 .648-.743l.102-.007l11.698-.001l-3.218-3.217a.75.75 0 0 1-.073-.976l.073-.084a.75.75 0 0 1 .976-.073zl4.495 4.494zM19.5 16.65l.007.1a.75.75 0 0 1-.648.744l-.102.007L7.061 17.5l3.221 3.22a.75.75 0 0 1 .073.976l-.072.084a.75.75 0 0 1-.977.073l-.084-.072l-4.5-4.497a.75.75 0 0 1-.073-.976l.073-.084l4.5-4.504a.75.75 0 0 1 1.133.976l-.072.084L7.065 16h11.692a.75.75 0 0 1 .743.65l.007.1z"></svg:path>`,
})
export class FluentArrowSwap24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
