import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFolderFileIcon],svg[lets-icons-folder-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M4 13c0-1.886 0-2.828.586-3.414S6.114 9 8 9h.343c.818 0 1.226 0 1.594.152s.657.442 1.235 1.02l.656.656c.579.579.867.867 1.235 1.02c.368.152.776.152 1.594.152H16c1.886 0 2.828 0 3.414.586S20 14.114 20 16s0 2.828-.586 3.414S17.886 20 16 20H8c-1.886 0-2.828 0-3.414-.586S4 17.886 4 16z"></svg:path><svg:path d="M18 12V8c0-1.886 0-2.828-.586-3.414S15.886 4 14 4h-4c-1.886 0-2.828 0-3.414.586S6 6.114 6 8v1"></svg:path></svg:g>`,
})
export class LetsIconsFolderFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
