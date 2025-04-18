import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsEditorTableIcon],svg[dashicons-editor-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 17V3H2v14zM16 7H4V5h12zm-7 4H4V9h5zm7 0h-5V9h5zm-7 4H4v-2h5zm7 0h-5v-2h5z"></svg:path>`,
})
export class DashiconsEditorTableIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
