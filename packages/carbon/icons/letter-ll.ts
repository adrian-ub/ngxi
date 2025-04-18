import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLetterLlIcon],svg[carbon-letter-ll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21V9H9v14h8v-2zm12 2h-2a2 2 0 0 1-2-2V9h2v12h2z"></svg:path>`,
})
export class CarbonLetterLlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
