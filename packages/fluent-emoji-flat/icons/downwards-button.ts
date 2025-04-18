import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatDownwardsButtonIcon],svg[fluent-emoji-flat-downwards-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M15.134 22.5a1 1 0 0 0 1.732 0l6.928-12a1 1 0 0 0-.866-1.5H9.072a1 1 0 0 0-.866 1.5z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatDownwardsButtonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
