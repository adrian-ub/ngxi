import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLetterJjIcon],svg[carbon-letter-jj-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9h2v2h-2zm0 16h-3v2h3a2 2 0 0 0 2-2V13h-2zm-6-2h-4a2 2 0 0 1-2-2v-2h2v2h4V9h2v12a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonLetterJjIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
