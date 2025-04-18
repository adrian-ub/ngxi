import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLetterEeIcon],svg[carbon-letter-ee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 19v-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2.01 2.01 0 0 0 2 2h5v-2h-5v-2zm-6-4h4v2h-4zm-4-4V9H7v14h8v-2H9v-4h5v-2H9v-4z"></svg:path>`,
})
export class CarbonLetterEeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
