import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiArticleSearchIcon],svg[ooui-article-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.43 14.34A5 5 0 0 1 10 15a5 5 0 1 1 3.95-2L17 16.09V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 1.45-.63z"></svg:path><svg:circle cx="10" cy="10" r="3" fill="currentColor"></svg:circle>`,
})
export class OouiArticleSearchIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
