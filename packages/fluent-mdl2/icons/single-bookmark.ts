import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SingleBookmarkIcon],svg[fluent-mdl2-single-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 0v2048l-640-323l-640 323V0zm-128 128H512v1712q129-65 256-130t256-129q129 64 256 129t256 130z"></svg:path>`,
})
export class FluentMdl2SingleBookmarkIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
