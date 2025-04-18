import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLetterUuIcon],svg[carbon-letter-uu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 23h-4a2 2 0 0 1-2-2v-8h2v8h4v-8h2v8a2 2 0 0 1-2 2m-10 0H9a2 2 0 0 1-2-2V9h2v12h4V9h2v12a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonLetterUuIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
