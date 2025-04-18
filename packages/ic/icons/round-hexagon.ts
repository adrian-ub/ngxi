import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundHexagonIcon],svg[ic-round-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.05 3h-8.1c-.71 0-1.37.38-1.73 1l-4.04 7c-.36.62-.36 1.38 0 2l4.04 7c.36.62 1.02 1 1.73 1h8.09c.71 0 1.37-.38 1.73-1l4.04-7c.36-.62.36-1.38 0-2l-4.04-7c-.35-.62-1.01-1-1.72-1"></svg:path>`,
})
export class IcRoundHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
