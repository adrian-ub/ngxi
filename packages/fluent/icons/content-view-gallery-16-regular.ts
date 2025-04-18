import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentContentViewGallery16RegularIcon],svg[fluent-content-view-gallery-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13H9V3zM13 6V4.5A1.5 1.5 0 0 0 11.5 3H10v3zm-3 7h1.5a1.5 1.5 0 0 0 1.5-1.5V10h-3zm3-6h-3v2h3zM2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5zm2 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zM5 5v2h2V5zm-.5 4a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentContentViewGallery16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
