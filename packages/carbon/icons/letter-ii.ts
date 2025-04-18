import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLetterIiIcon],svg[carbon-letter-ii-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 11h3v10h-3v2h8v-2h-3V11h3V9h-8zm10 2h2v10h-2zm0-4h2v2h-2z"></svg:path>`,
})
export class CarbonLetterIiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
