import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentLandscapeSplit20FilledIcon],svg[fluent-document-landscape-split-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8.5V4h-2v12h6a2 2 0 0 0 2-2v-4h-4.5A1.5 1.5 0 0 1 12 8.5M9 16H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5zm4-7.5V4.058c.242.07.465.2.646.381l3.915 3.915c.181.18.311.404.38.646H13.5a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class FluentDocumentLandscapeSplit20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
