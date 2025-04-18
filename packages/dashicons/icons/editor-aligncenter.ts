import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsEditorAligncenterIcon],svg[dashicons-editor-aligncenter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5V3H6v2zm3 4V7H3v2zm-3 4v-2H6v2zm3 4v-2H3v2z"></svg:path>`,
})
export class DashiconsEditorAligncenterIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
