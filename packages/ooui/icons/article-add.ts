import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiArticleAddIcon],svg[ooui-article-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm10 10h-4v4H9v-4H5V9h4V5h2v4h4z"></svg:path>`,
})
export class OouiArticleAddIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
