import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCharacterNegativeNumberIcon],svg[carbon-character-negative-number-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 22.5v-1h3v-11h-3v-1h4v12h3v1z"></svg:path><svg:path fill="currentColor" d="M23 10v12zm1-1h-5v2h3v10h-3v2h8v-2h-3zM5 15h10v2H5z"></svg:path>`,
})
export class CarbonCharacterNegativeNumberIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
