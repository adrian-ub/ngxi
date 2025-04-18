import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonClassifierLanguageIcon],svg[carbon-classifier-language-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 10V2h-8v8h3v4h-2v2h7v-2h-3v-4zm-6-6h4v4h-4zm-4 19.41L18.59 22L16 24.59L13.41 22L12 23.41L14.59 26L12 28.59L13.41 30L16 27.41L18.59 30L20 28.59L17.41 26zM20 14h-8v2h3v5h2v-5h3zM7 9.86a4 4 0 1 0-2 0V14H2v2h7v-2H7zM4 6a2 2 0 1 1 2 2a2 2 0 0 1-2-2"></svg:path>`,
})
export class CarbonClassifierLanguageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
