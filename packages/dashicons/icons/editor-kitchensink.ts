import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsEditorKitchensinkIcon],svg[dashicons-editor-kitchensink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2v6H1V2zm-1 5V3H2v4zM5 4v2H3V4zm3 0v2H6V4zm3 0v2H9V4zm3 0v2h-2V4zm3 0v2h-2V4zm2 5v9H1V9zm-1 8v-7H2v7zM5 11v2H3v-2zm3 0v2H6v-2zm3 0v2H9v-2zm6 0v2h-5v-2zm-6 3v2H3v-2zm3 0v2h-2v-2zm3 0v2h-2v-2z"></svg:path>`,
})
export class DashiconsEditorKitchensinkIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
