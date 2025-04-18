import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsEditorCodeDuplicateIcon],svg[dashicons-editor-code-duplicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 6l-4 4l4 4l-1 2l-6-6l6-6zm2 8l4-4l-4-4l1-2l6 6l-6 6z"></svg:path>`,
})
export class DashiconsEditorCodeDuplicateIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
