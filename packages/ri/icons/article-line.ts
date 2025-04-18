import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArticleLineIcon],svg[ri-article-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-1-2V4H5v16zM7 6h4v4H7zm0 6h10v2H7zm0 4h10v2H7zm6-9h4v2h-4z"></svg:path>`,
})
export class RiArticleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
