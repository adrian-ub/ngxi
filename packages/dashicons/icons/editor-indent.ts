import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsEditorIndentIcon],svg[dashicons-editor-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5V3h9v2zm10-1V3h4v1zm0 3h2V5l4 3.5l-4 3.5v-2h-2zM3 8V6h9v2zm2 3V9h7v2zm-2 3v-2h9v2zm10 0v-1h4v1zm-4 3v-2h3v2z"></svg:path>`,
})
export class DashiconsEditorIndentIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
