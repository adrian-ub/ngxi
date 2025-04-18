import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggExportIcon],svg[gg-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m16.95 5.968l-1.414 1.414L13 4.846v12.196h-2V4.847L8.465 7.382L7.05 5.968L12 1.018z"></svg:path><svg:path d="M5 20.982v-10h4v-2H3v14h18v-14h-6v2h4v10z"></svg:path></svg:g>`,
})
export class GgExportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
