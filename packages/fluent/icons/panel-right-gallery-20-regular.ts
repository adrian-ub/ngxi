import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPanelRightGallery20RegularIcon],svg[fluent-panel-right-gallery-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3zm-1 5h-4V8h4zm-4 1h4v1a2 2 0 0 1-2 2h-2zm4-6v1h-4V4h2a2 2 0 0 1 2 2m-5-2v11H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"></svg:path>`,
})
export class FluentPanelRightGallery20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
