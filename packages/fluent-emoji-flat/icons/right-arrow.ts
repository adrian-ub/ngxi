import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatRightArrowIcon],svg[fluent-emoji-flat-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M24.833 17.008a1 1 0 0 0 0-1.387L19.72 10.31c-.625-.649-1.721-.207-1.721.693v3.063a.25.25 0 0 1-.25.25H8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9.75a.25.25 0 0 1 .25.25v3.063c0 .9 1.096 1.342 1.72.693z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatRightArrowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
