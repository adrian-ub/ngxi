import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentResize16RegularIcon],svg[fluent-resize-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2h-2A2.5 2.5 0 0 0 2 4.5a.5.5 0 0 0 1 0A1.5 1.5 0 0 1 4.5 3h2a.5.5 0 0 0 0-1m-2 11h3A1.5 1.5 0 0 0 9 11.5v-3A1.5 1.5 0 0 0 7.5 7h-3A1.5 1.5 0 0 0 3 8.5v3A1.5 1.5 0 0 0 4.5 13m0 1A2.5 2.5 0 0 1 2 11.5v-3A2.5 2.5 0 0 1 4.5 6h3A2.5 2.5 0 0 1 10 8.5v3A2.5 2.5 0 0 1 7.5 14zm7 0a.5.5 0 0 1 0-1a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 1 1 0v2a2.5 2.5 0 0 1-2.5 2.5M14 6.5a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 0 11.5 3h-2a.5.5 0 0 1 0-1h2A2.5 2.5 0 0 1 14 4.5z"></svg:path>`,
})
export class FluentResize16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
