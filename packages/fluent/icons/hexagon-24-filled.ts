import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHexagon24FilledIcon],svg[fluent-hexagon-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.105 3a2.25 2.25 0 0 0-1.948 1.125l-3.896 6.75a2.25 2.25 0 0 0 0 2.25l3.896 6.75A2.25 2.25 0 0 0 8.105 21h7.79a2.25 2.25 0 0 0 1.95-1.125l3.895-6.75a2.25 2.25 0 0 0 0-2.25l-3.896-6.75A2.25 2.25 0 0 0 15.895 3z"></svg:path>`,
})
export class FluentHexagon24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
