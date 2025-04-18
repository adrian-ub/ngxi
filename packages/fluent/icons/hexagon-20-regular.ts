import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHexagon20RegularIcon],svg[fluent-hexagon-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.826 4a.5.5 0 0 0-.433.25l-3.176 5.5a.5.5 0 0 0 0 .5l3.176 5.5a.5.5 0 0 0 .433.25h6.35a.5.5 0 0 0 .433-.25l3.176-5.5a.5.5 0 0 0 0-.5l-3.176-5.5a.5.5 0 0 0-.433-.25zm-1.3-.25a1.5 1.5 0 0 1 1.3-.75h6.35a1.5 1.5 0 0 1 1.3.75l3.175 5.5a1.5 1.5 0 0 1 0 1.5l-3.176 5.5a1.5 1.5 0 0 1-1.299.75h-6.35a1.5 1.5 0 0 1-1.3-.75l-3.175-5.5a1.5 1.5 0 0 1 0-1.5z"></svg:path>`,
})
export class FluentHexagon20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
