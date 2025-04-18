import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTermIcon],svg[carbon-term-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 26h-3v-2h3V8h-3V6h3a2 2 0 0 1 2 2v16a2.003 2.003 0 0 1-2 2"></svg:path><svg:circle cx="23" cy="16" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="16" r="2" fill="currentColor"></svg:circle><svg:circle cx="9" cy="16" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M7 26H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3v2H4v16h3Z"></svg:path>`,
})
export class CarbonTermIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
