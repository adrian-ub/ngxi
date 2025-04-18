import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCharacterWholeNumberIcon],svg[carbon-character-whole-number-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 9h-6v2h6v4h-4v2h4v4h-6v2h6a2.003 2.003 0 0 0 2-2V11a2 2 0 0 0-2-2m-8 14h-8v-6a2 2 0 0 1 2-2h4v-4h-6V9h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4v4h6zm-17.5-.5v-1h3v-11h-3v-1h4v12h3v1z"></svg:path><svg:path fill="currentColor" d="M6 10v12zm1-1H2v2h3v10H2v2h8v-2H7z"></svg:path>`,
})
export class CarbonCharacterWholeNumberIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
