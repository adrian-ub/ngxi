import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggFolderRemoveIcon],svg[gg-folder-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 14.5v-2h6v2z"></svg:path><svg:path fill-rule="evenodd" d="M4 1.5a2 2 0 0 0-2 2v1q0 .086.007.168A3 3 0 0 0 0 7.5v12a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-12a3 3 0 0 0-3-3h-9.126A4 4 0 0 0 8 1.5zm5.732 3A2 2 0 0 0 8 3.5H4v1zM3 6.5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgFolderRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
