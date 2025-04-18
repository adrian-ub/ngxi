import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLetterKkIcon],svg[carbon-letter-kk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9h-2.11L9 15.55V9H7v14h2v-4.29l.93-1.49L12.89 23H15l-3.89-7.57zm7.78 14H25l-3.78-6L25 13h-2.24L19 17.17V9h-2v14h2v-3.75l.96-1.04z"></svg:path>`,
})
export class CarbonLetterKkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
