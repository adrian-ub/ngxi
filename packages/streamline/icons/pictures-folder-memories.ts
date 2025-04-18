import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePicturesFolderMemoriesIcon],svg[streamline-pictures-folder-memories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.901 13.25L5.3 8.004a.54.54 0 0 0-.688 0L.516 10.95M9.86 7.88a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path d="M.5 12.25V1.75a1 1 0 0 1 1-1h3.69a1 1 0 0 1 1 .76l.31 1.24h6a1 1 0 0 1 1 1v8.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class StreamlinePicturesFolderMemoriesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
