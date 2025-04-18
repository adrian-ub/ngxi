import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsEditorRtlIcon],svg[dashicons-editor-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2H5.5C3 2 1 4 1 6.5S3 11 5.5 11H6v6c0 .5.5 1 1 1s1-.5 1-1V5c0-.5.5-1 1-1s1 .5 1 1v12c0 .5.5 1 1 1s1-.5 1-1V4h1c.5 0 1-.5 1-1s-.5-1-1-1m1 8l5 4V6z"></svg:path>`,
})
export class DashiconsEditorRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
