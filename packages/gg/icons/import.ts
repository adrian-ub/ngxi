import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggImportIcon],svg[gg-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 9.982v10h14v-10h-4v-2h6v14H3v-14h6v2z"></svg:path><svg:path d="M13 2h-2v12.053l-2.535-2.536l-1.415 1.415l4.95 4.95l4.95-4.95l-1.414-1.415L13 14.054z"></svg:path></svg:g>`,
})
export class GgImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
