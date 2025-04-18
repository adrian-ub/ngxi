import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiArticleDisambiguationRtlIcon],svg[ooui-article-disambiguation-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2zM8.998 4h-4v4l1.281-1.281L9.56 10l-3.28 3.281L4.997 12v4h4l-1.312-1.313L11.404 11h3.594V9h-3.594L7.717 5.281z"></svg:path>`,
})
export class OouiArticleDisambiguationRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
