import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLetterNnIcon],svg[carbon-letter-nn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 23h-2v-8h-4v8h-2V13h6a2 2 0 0 1 2 2zm-12-4L9.32 9H7v14h2V13l3.68 10H15V9h-2z"></svg:path>`,
})
export class CarbonLetterNnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
