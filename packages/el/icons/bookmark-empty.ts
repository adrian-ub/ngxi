import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elBookmarkEmptyIcon],svg[el-bookmark-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.364 0v1200L600 834.364L965.636 1200V0zm75 75h581.271v937.5L600 721.864L309.364 1012.5z"></svg:path>`,
})
export class ElBookmarkEmptyIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
