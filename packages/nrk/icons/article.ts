import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkArticleIcon],svg[nrk-article-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 3h14v18H5zM3 23V1h18v22zm4-11v2h8v-2zm0-6h4v2H7zm6 10H7v2h6z" clip-rule="evenodd"></svg:path>`,
})
export class NrkArticleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
