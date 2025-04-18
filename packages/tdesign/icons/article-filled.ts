import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignArticleFilledIcon],svg[tdesign-article-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 2h-19v20h19zM17 7v2H7V7zm0 4v2H7v-2zm-3 6H7v-2h7z"></svg:path>`,
})
export class TdesignArticleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
