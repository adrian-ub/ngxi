import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatUpArrowIcon],svg[fluent-emoji-flat-up-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M15.307 7.667a1 1 0 0 1 1.386 0l5.313 5.113c.649.624.207 1.72-.693 1.72H18.25a.25.25 0 0 0-.25.25v9.75a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-9.75a.25.25 0 0 0-.25-.25h-3.063c-.9 0-1.342-1.096-.693-1.72z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatUpArrowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
