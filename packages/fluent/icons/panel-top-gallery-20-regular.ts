import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPanelTopGallery20RegularIcon],svg[fluent-panel-top-gallery-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zM3 7a2 2 0 0 1 2-2h2v4H3zm0 3h14v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm14-1h-4V5h2a2 2 0 0 1 2 2zm-5-4v4H8V5z"></svg:path>`,
})
export class FluentPanelTopGallery20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
