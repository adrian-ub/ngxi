import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLetterHhIcon],svg[carbon-letter-hh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9v6H9V9H7v14h2v-6h4v6h2V9zm10 4h-4V9h-2v14h2v-8h4v8h2v-8a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonLetterHhIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
