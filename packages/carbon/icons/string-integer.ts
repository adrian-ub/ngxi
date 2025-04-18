import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonStringIntegerIcon],svg[carbon-string-integer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 12h-4v2h4v2h-3v2h3v2h-4v2h4a2.003 2.003 0 0 0 2-2v-6a2 2 0 0 0-2-2m-7 10h-6v-4a2 2 0 0 1 2-2h2v-2h-4v-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v2h4zM8 20v-8H6v1H4v2h2v5H4v2h6v-2z"></svg:path>`,
})
export class CarbonStringIntegerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
