import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconRootFolderIcon],svg[codicon-root-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.71 3h6.79l.51.5v10l-.5.5H8.743a5.5 5.5 0 0 0 .657-1h4.59v-1.51l.01-4v-1.5H7.69l-.017.017a5.5 5.5 0 0 0-.881-.508l.348-.349l.35-.15h6.5l.01-.99H7.5l-.36-.15l-.85-.85H2V5.6a5.5 5.5 0 0 0-.99.649V2.5l.5-.5h5l.35.15z" clip-rule="evenodd"></svg:path><svg:path d="M6 10.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path><svg:path fill-rule="evenodd" d="M8 10.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M4.5 13a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class CodiconRootFolderIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
