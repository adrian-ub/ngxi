import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feFolderOpenIcon],svg[fe-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h4zm-2 6v8h10v-8zM5 7v12h2V9h12V7z"></svg:path>`,
})
export class FeFolderOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
