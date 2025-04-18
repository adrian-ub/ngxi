import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFolderZipIcon],svg[tdesign-folder-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2.5h8.48l2 2.5H23v16H1zm2 2V19h11v-2h2v-1.996h-2V13h2v-1.996h-2V9h2V7h-5.48l-2-2.5zm13.004 4.504V11h2v2.004h-2V15h2v2.004h-2V19H21V7h-2.996v2.004z"></svg:path>`,
})
export class TdesignFolderZipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
