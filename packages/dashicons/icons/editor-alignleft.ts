import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsEditorAlignleftIcon],svg[dashicons-editor-alignleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5V3H3v2zm5 4V7H3v2zm-5 4v-2H3v2zm5 4v-2H3v2z"></svg:path>`,
})
export class DashiconsEditorAlignleftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
