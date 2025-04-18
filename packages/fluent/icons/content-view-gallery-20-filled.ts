import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentContentViewGallery20FilledIcon],svg[fluent-content-view-gallery-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7H6v2h3zM3 6a3 3 0 0 1 3-3h6v14H6a3 3 0 0 1-3-3zm2 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1m.5 4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM5 13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5m8 3.5h1a3 3 0 0 0 3-3v-1h-4zm4-5V8h-4v4zm0-5V6a3 3 0 0 0-3-3h-1v4z"></svg:path>`,
})
export class FluentContentViewGallery20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
