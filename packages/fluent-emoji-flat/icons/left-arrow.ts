import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatLeftArrowIcon],svg[fluent-emoji-flat-left-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M7.417 15.557a1 1 0 0 0 0 1.386l5.113 5.313c.624.649 1.72.207 1.72-.693V18.5a.25.25 0 0 1 .25-.25h9.75a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H14.5a.25.25 0 0 1-.25-.25v-3.063c0-.9-1.096-1.342-1.72-.693z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatLeftArrowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
