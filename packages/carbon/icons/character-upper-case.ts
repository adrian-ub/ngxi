import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCharacterUpperCaseIcon],svg[carbon-character-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 23h-6a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h6v2h-6v10h6zM20 12a3.003 3.003 0 0 0-3-3h-5v14h5a3.003 3.003 0 0 0 3-3v-2a2.98 2.98 0 0 0-.78-2a2.98 2.98 0 0 0 .78-2zm-6-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3zm4 9a1 1 0 0 1-1 1h-3v-4h3a1 1 0 0 1 1 1zM8 9H4a2 2 0 0 0-2 2v12h2v-5h4v5h2V11a2 2 0 0 0-2-2m-4 7v-5h4v5z"></svg:path>`,
})
export class CarbonCharacterUpperCaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
