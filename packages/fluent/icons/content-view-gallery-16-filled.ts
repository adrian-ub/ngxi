import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentContentViewGallery16FilledIcon],svg[fluent-content-view-gallery-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2H4.5A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14H10zm1 12h.5a2.5 2.5 0 0 0 2.5-2.5V11h-3zm3-4V6h-3v4zm0-5v-.5A2.5 2.5 0 0 0 11.5 2H11v3zM4 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zM5 5v2h2V5zm-.5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m0 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1"></svg:path>`,
})
export class FluentContentViewGallery16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
