import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLetterRrIcon],svg[carbon-letter-rr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 15v-4a2 2 0 0 0-2-2H8v14h2v-6h1.48l2.34 6H16l-2.33-6H14a2 2 0 0 0 2-2m-6-4h4v4h-4zm14 2h-6v10h2v-8h4z"></svg:path>`,
})
export class CarbonLetterRrIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
