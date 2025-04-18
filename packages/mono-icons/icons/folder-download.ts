import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[monoIconsFolderDownloadIcon],svg[mono-icons-folder-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6a2 2 0 0 1 2-2h5a1 1 0 0 1 .707.293L11.414 6H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm6.586 0H4v12h16V8h-9a1 1 0 0 1-.707-.293zM12 9.5a1 1 0 0 1 1 1v2.586l.293-.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414l.293.293V10.5a1 1 0 0 1 1-1"></svg:path>`,
})
export class MonoIconsFolderDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
