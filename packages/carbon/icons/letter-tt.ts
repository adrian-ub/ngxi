import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLetterTtIcon],svg[carbon-letter-tt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 11h3v12h2V11h3V9H8zm15 4v-2h-3v-2h-2v2h-2v2h2v6a2 2 0 0 0 2 2h3v-2h-3v-6z"></svg:path>`,
})
export class CarbonLetterTtIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
