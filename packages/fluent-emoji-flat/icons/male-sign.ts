import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatMaleSignIcon],svg[fluent-emoji-flat-male-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M20.781 6a1 1 0 0 0 0 2h1.913l-3.57 3.614a8 8 0 1 0 1.41 1.418L24 9.522v1.774a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1zm-6.578 5.922a6 6 0 1 1 0 12a6 6 0 0 1 0-12"></svg:path></svg:g>`,
})
export class FluentEmojiFlatMaleSignIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
