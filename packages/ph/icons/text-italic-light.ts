import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextItalicLightIcon],svg[ph-text-italic-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 56a6 6 0 0 1-6 6h-35.68l-44 132H144a6 6 0 0 1 0 12H64a6 6 0 0 1 0-12h35.68l44-132H112a6 6 0 0 1 0-12h80a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhTextItalicLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
