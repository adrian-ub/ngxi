import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsVerticalHexagonSolidIcon],svg[mynaui-dots-vertical-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zm1.07 9.145a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zM11 8c0 .414.336.75.75.75h.5a.75.75 0 0 0 0-1.5h-.5A.75.75 0 0 0 11 8m.75 7.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiDotsVerticalHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
