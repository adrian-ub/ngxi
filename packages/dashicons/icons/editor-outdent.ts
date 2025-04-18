import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsEditorOutdentIcon],svg[dashicons-editor-outdent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4V3H3v1zm10 1V3H8v2zM7 7H5V5L1 8.5L5 12v-2h2zm10 1V6H8v2zm-2 3V9H8v2zm2 3v-2H8v2zM7 14v-1H3v1zm4 3v-2H8v2z"></svg:path>`,
})
export class DashiconsEditorOutdentIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
