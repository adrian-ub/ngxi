import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiArticleDisambiguationLtrIcon],svg[ooui-article-disambiguation-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1H5c-1.1 0-2 .9-2 2v6h4.6l3.7-3.7L10 4h4v4l-1.3-1.3L9.4 10l3.3 3.3L14 12v4h-4l1.3-1.3L7.6 11H3v6c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2"></svg:path>`,
})
export class OouiArticleDisambiguationLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
