import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentLandscapeSplit24FilledIcon],svg[fluent-document-landscape-split-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6.5zM12 20h8a2 2 0 0 0 2-2v-6h-6a2 2 0 0 1-2-2V4h-2zm4-9.5h5.5l-6-6V10a.5.5 0 0 0 .5.5"></svg:path>`,
})
export class FluentDocumentLandscapeSplit24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
