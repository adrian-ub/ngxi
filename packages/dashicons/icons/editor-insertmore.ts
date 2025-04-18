import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsEditorInsertmoreIcon],svg[dashicons-editor-insertmore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7V3H3v4zM6 11V9H3v2zm6 0V9H8v2zm5 0V9h-3v2zm0 6v-4H3v4z"></svg:path>`,
})
export class DashiconsEditorInsertmoreIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
