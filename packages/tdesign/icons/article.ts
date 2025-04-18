import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignArticleIcon],svg[tdesign-article-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 2h19v20h-19zm2 2v16h15V4zM7 7h10v2H7zm0 4h10v2H7zm0 4h7v2H7z"></svg:path>`,
})
export class TdesignArticleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
