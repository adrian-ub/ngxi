import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsEditorAlignrightIcon],svg[dashicons-editor-alignright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5V3H8v2zm0 4V7H3v2zm0 4v-2H8v2zm0 4v-2H3v2z"></svg:path>`,
})
export class DashiconsEditorAlignrightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
