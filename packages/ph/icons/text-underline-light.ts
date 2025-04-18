import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextUnderlineLightIcon],svg[ph-text-underline-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 224a6 6 0 0 1-6 6H64a6 6 0 0 1 0-12h128a6 6 0 0 1 6 6m-70-26a62.07 62.07 0 0 0 62-62V56a6 6 0 0 0-12 0v80a50 50 0 0 1-100 0V56a6 6 0 0 0-12 0v80a62.07 62.07 0 0 0 62 62"></svg:path>`,
})
export class PhTextUnderlineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
