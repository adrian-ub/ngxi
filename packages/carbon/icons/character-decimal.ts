import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCharacterDecimalIcon],svg[carbon-character-decimal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M24 23h-4a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a2.003 2.003 0 0 1-2 2m-4-12v10h4V11zm-9 4h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M14 23h-4a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a2.003 2.003 0 0 1-2 2m-4-12v10h4V11zM4 21h2v2H4z"></svg:path>`,
})
export class CarbonCharacterDecimalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
