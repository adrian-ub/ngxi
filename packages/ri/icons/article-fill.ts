import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArticleFillIcon],svg[ri-article-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1M7 6v4h4V6zm0 6v2h10v-2zm0 4v2h10v-2zm6-9v2h4V7z"></svg:path>`,
})
export class RiArticleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
