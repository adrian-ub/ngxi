import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLetterMmIcon],svg[carbon-letter-mm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 13h-8v10h2v-8h2v8h2v-8h2v8h2v-8a2 2 0 0 0-2-2M12 9l-1.52 5l-.48 1.98L9.54 14L8 9H6v14h2v-8l-.16-2l.58 2L10 19.63L11.58 15l.58-2l-.16 2v8h2V9z"></svg:path>`,
})
export class CarbonLetterMmIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
