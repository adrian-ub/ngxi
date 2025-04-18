import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiArticleRtlIcon],svg[ooui-article-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zM15 5h-5V4h5zm0 2h-5V6h5zm0 2h-5V8h5zM5 14h10v1H5zm0-2h10v1H5zm0-2h10v1H5zm0-6h4v5H5z"></svg:path>`,
})
export class OouiArticleRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
