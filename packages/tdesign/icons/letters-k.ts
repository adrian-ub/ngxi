import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersKIcon],svg[tdesign-letters-k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20v-6.057l5 3.572V20h2v-2.743a1.5 1.5 0 0 0-.628-1.22L10.72 12l5.65-4.037a1.5 1.5 0 0 0 .63-1.22V4h-2v2.485l-5 3.572V4H8v16z"></svg:path>`,
})
export class TdesignLettersKIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
