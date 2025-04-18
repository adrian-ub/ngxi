import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLetterPpIcon],svg[carbon-letter-pp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 13h-6v14h2v-4h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m-4 8v-6h4v6zM9 23H7V9h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9zm0-7h4v-5H9z"></svg:path>`,
})
export class CarbonLetterPpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
