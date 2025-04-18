import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsVagrantIcon],svg[file-icons-vagrant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M506.9 36.7L443.8 0L317.7 73.4v34.5l-64 166.8l-63.6-165V73.5L63.4 0L.1 36.6L0 73.9l158.6 383.6l95.1 54.4l94.9-54.7l158.7-384z"></svg:path>`,
})
export class FileIconsVagrantIcon {
  readonly viewBox = input("0 0 508 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
