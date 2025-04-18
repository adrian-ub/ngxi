import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageExclamationHexagonIcon],svg[mage-exclamation-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="1.5" d="M3.701 15.734V8.266a1.79 1.79 0 0 1 .89-1.542l6.52-3.734a1.77 1.77 0 0 1 1.778 0l6.473 3.734a1.79 1.79 0 0 1 .937 1.542v7.468a1.79 1.79 0 0 1-.89 1.542l-6.52 3.734a1.77 1.77 0 0 1-1.778 0l-6.473-3.735a1.79 1.79 0 0 1-.937-1.54m8.294-8.995v6.319"></svg:path><svg:path stroke-width="2" d="M12.044 16.553h-.01"></svg:path></svg:g>`,
})
export class MageExclamationHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
