import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTextFillIcon],svg[carbon-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 26h24v4H4z"></svg:path><svg:path fill="currentColor" d="M26 14.54a1 1 0 0 0-.25-.69l-8.58-9.52A1 1 0 0 0 17 4.2V2h-2v3L4.32 14.74a1 1 0 0 0-.06 1.41l8.57 9.52a1 1 0 0 0 .69.33h.05a1 1 0 0 0 .68-.26L24 16.8V21a1 1 0 0 0 2 0zm-12.35 9l-7.23-8L15 7.67V12h2V7.13l6.59 7.33Z"></svg:path>`,
})
export class CarbonTextFillIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
