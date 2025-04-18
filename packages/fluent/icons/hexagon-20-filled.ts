import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHexagon20FilledIcon],svg[fluent-hexagon-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.826 3a1.5 1.5 0 0 0-1.3.75l-3.175 5.5a1.5 1.5 0 0 0 0 1.5l3.176 5.5a1.5 1.5 0 0 0 1.299.75h6.35a1.5 1.5 0 0 0 1.3-.75l3.175-5.5a1.5 1.5 0 0 0 0-1.5l-3.176-5.5A1.5 1.5 0 0 0 13.176 3z"></svg:path>`,
})
export class FluentHexagon20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
